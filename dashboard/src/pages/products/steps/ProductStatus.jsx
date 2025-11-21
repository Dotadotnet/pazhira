import React, { useMemo, useEffect, useCallback } from "react";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import { toast } from "react-hot-toast";
import { useGetTagsQuery } from "@/services/tag/tagApi";
import Tag from "@/components/icons/Tag";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";
import Plus from "@/components/icons/Plus";
import { Controller } from "react-hook-form";

const ProductStatus = ({
  register,
  errors,
  control,
  selectedOptions,
  setSelectedOptions,
  setIsAddModalOpen, // کنترل مودال افزودن تگ
}) => {
  // دریافت لیست تگ‌ها از API
  const {
    isLoading: fetchingTags,
    data: fetchTagsData,
    error: fetchTagsError,
    refetch: refetchTags,
  } = useGetTagsQuery();

  // تبدیل داده‌های دریافتی به فرمت مناسب برای MultiSelect
  const tags = useMemo(
    () =>
      fetchTagsData?.data?.map((tag) => ({
        id: tag._id,
        value: tag.title,
        label: tag.title,
        description: tag.description,
      })) || [],
    [fetchTagsData]
  );



  // مدیریت تغییرات انتخابی
  const handleOptionsChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  // نمایش وضعیت دریافت تگ‌ها
  useEffect(() => {
    if (fetchingTags) {
      toast.loading("در حال دریافت تگ‌ها ...", { id: "fetchTags" });
    } else if (fetchTagsData) {
      toast.success(fetchTagsData?.description, { id: "fetchTags" });
    } else if (fetchTagsError) {
      toast.error(fetchTagsError?.data?.description, { id: "fetchTags" });
    }
  }, [fetchingTags, fetchTagsData, fetchTagsError]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex items-center justify-center gap-x-2 p-4  rounded">
        <label htmlFor="tag" className="w-full flex flex-col gap-y-1">
          <span className="text-sm pr-7 pb-2">برچسب</span>
          <Controller
            control={control}
            name="tags"
            render={({ field: { onChange, value } }) => (
              <MultiSelect
                items={tags}
                selectedItems={value || []}
                handleSelect={onChange}
                icon={<Tag size={24} />}
                placeholder="چند مورد انتخاب کنید"
                className={"w-full h-12"}
                returnType="id"
              />
            )}
          />

        </label>

      </div>


      <Controller
        control={control}
        name="isSpecial"
        render={({ field: { onChange, value } }) => (
          <StatusSwitch defaultChecked={value} label="آیا این محصول ویژه است" onChange={onChange} />

        )}
      />


    </div>
  );
};

export default ProductStatus;
