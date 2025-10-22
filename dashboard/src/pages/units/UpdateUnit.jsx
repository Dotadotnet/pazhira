
import Button from "@/components/shared/button/Button";
import { useGetUnitQuery, useUpdateUnitMutation } from "@/services/unit/unitApi";
import { toast } from "react-hot-toast";
import Modal from "@/components/shared/modal/Modal";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import Edit from "@/components/icons/Edit";
import { useDispatch } from "react-redux";
import { setUnit } from "@/features/unit/unitSlice";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
 import Dropdown from "@/components/shared/dropDown/Dropdown";
import { useForm, Controller } from "react-hook-form";

const UpdateUnit = ({ id }) => {
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
  } = useGetUnitQuery(id);
  const [
    updateUnit,
    { isLoading: isUpdateing, data: updateData, error: updateError },
  ] = useUpdateUnitMutation();
  const { isLoading: fetchingCategories, data: fetchCategoriesData } = useGetCategoriesQuery();

  const categories = useMemo(() => fetchCategoriesData?.data || [], [fetchCategoriesData]);

  useEffect(() => {
    if (isUpdateing) {
      toast.loading("در حال به‌روزرسانی ...", {
        id: "fetchUnit",
      });
    }
    if (fetchData) {
      toast.success(fetchData?.message, { id: "fetchUnit" });
    }

    if (fetchError?.data) {
      toast.error(fetchError?.data?.message, { id: "fetchUnit" });
    }

    if (updateData) {
      toast.success(updateData?.message, { id: "updateUnit" });
      setIsOpen(false);
    }

    if (updateError?.data) {
      toast.error(updateError?.data?.message, { id: "updateUnit" });
    }
  }, [fetching, fetchData, fetchError, isUpdateing, updateData, updateError]);

  useEffect(() => {
    if (fetchData) {
      dispatch(setUnit(fetchData?.data));
      setSelectedOptions(fetchData?.data?.robots || []);
      setKeynotes(fetchData?.data?.keynotes || [""]);
    }
  }, [fetchData, dispatch]);

  const handleUpdateUnit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("symbol", data.symbol);
    const status = data.status ? "active" : "inactive";
    formData.append("status", status);

    updateUnit({ id, body: formData });
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
            onSubmit={handleSubmit(handleUpdateUnit)}
          >
            <div className="flex gap-4 flex-col">
              <div className="w-full flex flex-col gap-y-4 p-4 border rounded">
                {/* title */}
                <label htmlFor="title" className="w-full flex flex-col gap-y-1">
                  <span className="text-sm">عنوان*</span>
                  <input
                    type="text"
                    id="title"
                    maxLength="100"
                    defaultValue={fetchData?.data?.title}
                    {...register("title", {
                      required: "عنوان الزامی است!",
                      minLength: {
                        symbol: 3,
                        message: "عنوان باید حداقل ۳ کاراکتر باشد!",
                      },
                      maxLength: {
                        symbol: 100,
                        message: "عنوان نمی‌تواند بیش از ۱۰۰ کاراکتر باشد!",
                      },
                      pattern: {
                        symbol: /^[آ-یA-Za-z0-9\s]+$/,
                        message:
                          "عنوان فقط باید شامل حروف فارسی، انگلیسی و عدد باشد!",
                      },
                    })}
                  />
                  {errors.title && (
                    <span className="text-red-500 text-xs">
                      {errors.title.message}
                    </span>
                  )}
                </label>
                <label htmlFor="symbol" className="w-full flex flex-col gap-y-1">
                  <span className="text-sm">نماد*</span>
                  <input
                    type="text"
                    id="symbol"
                    min="0"
                    step="any" 
                    defaultValue={fetchData?.data?.symbol || 0}
                    {...register("symbol", {
                      required: "نماد الزامی است!",
                      min: { symbol: 0, message: "نماد نمی‌تواند منفی باشد" },
                    })}
                  />
                  {errors.symbol && <span className="text-red-500 text-xs">{errors.symbol.message}</span>}
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

export default UpdateUnit;
