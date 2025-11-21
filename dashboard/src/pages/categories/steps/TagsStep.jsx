import { useEffect, useMemo } from "react";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useGetTagsQuery } from "@/services/tag/tagApi";
import Tag from "@/components/icons/Tag";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";
import Plus from "@/components/icons/Plus";
import { Controller } from "react-hook-form";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import { toast } from "react-hot-toast";
import { useGetFeaturesQuery } from "@/services/feature/featureApi";

const TagsStep = ({ control, errors, register }) => {
  const {
    isLoading: fetchingTags,
    data: fetchTagsData,
    error: fetchTagsError
  } = useGetTagsQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });

    const { data: fetchFeatureData, isLoading, error, refetch } = useGetFeaturesQuery({
      page: 1,
      limit: Infinity,
      status: "all",
      search: ""
    });
  

  const {
    isLoading: fetchingCategories,
    data: fetchCategoriesData,
    error: fetchCategoriesError
  } = useGetCategoriesQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });
  const categories = useMemo(
    () =>
      fetchCategoriesData?.data?.map((category) => ({
        id: category._id,
        value: category.title,
        label: category.title,
        icon: category.icon
      })) || [],
    [fetchCategoriesData]
  );

  const tags = useMemo(
    () =>
      fetchTagsData?.data?.map((tag) => ({
        id: tag._id,
        value: tag.title,
        label: tag.title,
        about: tag.about
      })),
    [fetchTagsData]
  );

  const features = useMemo(
    () =>
      fetchFeatureData?.data?.map((feature) => (

        {
          id: feature._id,
          value: feature.nameFa,
          label: feature.nameEn,
          icon: feature.icon.symbol
        }


      )),
    [fetchFeatureData]
  );

  return (
    <div>
      <div className="flex flex-col gap-y-6">
              <label
                htmlFor="features"
                className="flex flex-col text-right gap-y-3"
              >
                ویژگی های محصول را انتخاب کنید :
                <div className="col-span-2">
                  <Controller
                    control={control}
                    name={`features`}
                    rules={{
                      required: "وارد کردن ویژگی اجباری است",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <MultiSelect
                        items={features}
                        selectedItems={Array.isArray(value) ? value : []}
                        handleSelect={onChange}
                        placeholder="چند مورد انتخاب کنید"
                        className={"w-full h-12"}
                        returnType="id"
                      />
      
                    )}
                  />
                </div>
                {errors?.icon && (
                  <span className="text-red-500 text-sm">
                    {errors?.icon.message}
                  </span>
                )}
              </label>
            </div>

      <div className="flex flex-col gap-y-4 mt-3 h-full p-2">
    
        <div className="flex flex-col gap-y-2 w-full  ">
          <div className="flex-1 flex items-center justify-between gap-2 gap-y-2 w-full">
            <div className="flex flex-col flex-1">
              <label htmlFor="tags" className="flex flex-col gap-y-2 ">
                <span className=" text-gray-900 dark:text-white"> تگ ها :</span>
                <Controller
                  control={control}
                  name="tags"
                  render={({ field: { onChange, value } }) => (
                    <MultiSelect
                      items={tags}
                      selectedItems={value || []}
                      handleSelect={onChange}
                      icon={<Tag />}
                      placeholder="چند مورد انتخاب کنید"
                      className={"w-full h-12"}
                      returnType="id"
                    />
                  )}
                />
              </label>
            </div>
            <div className="mt-7 flex justify-start">
              <button
                type="button"
                className="p-2 bg-green-400 dark:bg-blue-600 text-white rounded hover:bg-green-600 dark:hover:bg-blue-400 transition-colors"
                aria-label="افزودن تگ جدید"
              >
                <Plus className="w-8 h-8" />
              </button>
            </div>
          </div>
          {errors.tags && (
            <span className="text-red-500 text-sm">{errors.tags.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagsStep;
