import { useEffect, useState } from "react";
import Button from "@/components/shared/button/Button";
import { useAddIconMutation } from "@/services/icon/iconApi";
import { toast } from "react-hot-toast";
import Modal from "@/components/shared/modal/Modal";
import { useForm } from "react-hook-form";
import AddButton from "@/components/shared/button/AddButton";
import { useAddFeatureTypeMutation } from "@/services/featureType/featureTypeApi";

const AddIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm();

  const [addFeatureType, { isLoading: isAdding, data: addData, error: addError }] = useAddFeatureTypeMutation();

  useEffect(() => {
    if (isAdding) {
      toast.loading("در حال افزودن  نوع ویژگی...", { id: "addFeatureType" });
    }

    if (addData) {
      toast.success(addData?.description, { id: "addFeatureType" });
      location.reload();
      setIsOpen(false)
    }

    if (addError?.data) {
      toast.error(addError?.data?.description, { id: "addFeatureType" });
    }
  }, [isAdding, addData, addError]);

  function handleAddIcon(data) {
    const formData = {
      nameFa: data.nameFa,
      nameEn: data.nameEn
    };

    addFeatureType(formData);
  }
  const svgIcon = watch("svgIcon");

  return (
    <>
      <AddButton onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="lg:w-1/3 md:w-1/2 w-full z-50 p-4 rounded-md overflow-y-hidden"
        >
          <form
            className="text-sm w-full h-full flex flex-col gap-y-4 mb-3 p-4 overflow-y-auto"
            onSubmit={handleSubmit(handleAddIcon)}
          >
            <div className="flex gap-4 flex-col">
              <div className="w-full flex flex-col gap-y-4 p-4  rounded">
                {/* title */}
                <label htmlFor="nameFa" className="w-full flex flex-col gap-y-1">
                  <span className="text-md ">نام  :</span>
                  <input
                    type="text"
                    name="nameFa"
                    id="nameFa"
                    className="mt-2"
                    maxLength="100"
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
                    className="mt-2"
                    maxLength="100"
                    required
                    {...register("nameEn", {
                      required: "نام انگلیسی الزامی است",
                      minLength: {
                        value: 3,
                        message: "نام انگلیسی باید حداقل ۳ کاراکتر باشد"
                      }
                    })}
                  />
                </label>
                <div className="w-full flex justify-center">
                  {svgIcon && (
                    <div className="border rounded p-4 mt-2 flex justify-center items-center w-20 h-20">
                      <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                    </div>
                  )}
                </div>
              </div>
              <Button type="submit" className="py-2 mt-4 mb-4 bg-black">
                ایجاد کردن
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddIcon;
