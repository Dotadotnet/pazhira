
import Button from "@/components/shared/button/Button";
import { toast } from "react-hot-toast";
import Modal from "@/components/shared/modal/Modal";
import { useEffect, useMemo, useState, useCallback } from "react";
import Edit from "@/components/icons/Edit";
import { useDispatch } from "react-redux";
import { setIcon } from "@/features/icon/iconSlice";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import { useForm, } from "react-hook-form";
import { useGetFeatureTypeQuery, useUpdateFeatureTypeMutation } from "@/services/featureType/featureTypeApi";

const UpdateIcon = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [keynotes, setKeynotes] = useState([""]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const {
    isLoading: fetching,
    data: fetchData,
    error: fetchError,
  } = useGetFeatureTypeQuery(id);
  const [
    updateFeatureType,
    { isLoading: isUpdateing, data: updateData, error: updateError },
  ] = useUpdateFeatureTypeMutation();


  useEffect(() => {
    // if (isUpdateing) {
    //   toast.loading("در حال به‌روزرسانی ...", {
    //     id: "fetchIcon",
    //   });
    // }
    if (fetchError?.data) {
      toast.error(fetchError?.data?.message, { id: "fetchIcon" });
    }

    if (updateData) {
      toast.success(updateData?.message, { id: "updateFeatureType" });
      setIsOpen(false);
      location.reload();
    }

    if (updateError?.data) {
      toast.error(updateError?.data?.message, { id: "updateFeatureType" });
    }
  }, [fetching, fetchData, fetchError, isUpdateing, updateData, updateError]);

  useEffect(() => {
    if (fetchData) {
      dispatch(setIcon(fetchData?.data));
      setSelectedOptions(fetchData?.data?.robots || []);
      setKeynotes(fetchData?.data?.keynotes || [""]);
    }
  }, [fetchData, dispatch]);

  const handleUpdateIcon = (data) => {
    const formData = new FormData();
    formData.append("nameFa", data.nameFa);
    // formData.append("nameEn", data.nameEn);
    const status = data.status ? "active" : "inactive";
    formData.append("status", status);
    // location.reload();
    updateFeatureType({ id, body: formData });
  };




  return (
    <>
      <span
        type="button"
        disabled={fetching ? true : undefined}
        className="edit-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Edit className="w-5 h-5" />
      </span>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          action=""
          onClose={() => setIsOpen(false)}
          className="lg:w-1/3 md:w-1/2 w-full z-50 p-4 rounded-md overflow-y-hidden"
        >
          <form
            action=""
            className="text-sm w-full h-full flex flex-col gap-y-4 mb-3 p-4 overflow-y-auto text-right"
            onSubmit={handleSubmit(handleUpdateIcon)}
          >
            <div className="flex gap-4 flex-col">
              <div className="w-full flex flex-col gap-y-3 p-4 rounded">
                {/* title */}
                <label htmlFor="nameFa" className="w-full flex flex-col gap-y-1">
                  <span className="text-md ">نام  :</span>
                  <input
                    type="text"
                    name="nameFa"
                    id="nameFa"
                    className="mt-2"
                    maxLength="100"
                    defaultValue={fetchData.data.nameFa}
                    required
                    {...register("nameFa", {
                      required: "نام الزامی است",
                      minLength: {
                        value: 3,
                        message: "نام باید حداقل ۳ کاراکتر باشد"
                      }
                    })}
                  />
                </label>
                {/* value */}
                <label htmlFor="nameEn" className="w-full flex flex-col gap-y-1">
                  <span className="text-md ">شناسه انگلیسی :</span>
                  <input
                    type="text"
                    name="nameEn"
                    id="nameEn"
                    className="mt-2 opacity-60"
                    maxLength="100"
                    required
                    disabled
                    value={fetchData.data.nameEn}
                  />
                </label>
                {/* description */}

              </div>


              <div className="flex flex-col gap-y-2 w-full ">
                <StatusSwitch
                  label="وضعیت"
                  id="status"
                  register={register}
                  defaultChecked={fetchData?.data?.status === "active" ? true : false}
                />
              </div>
              <Button type="submit" className="py-2 mt-4 mb-4 bg-black">
                ویرایش کردن
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default UpdateIcon;
