import React, { useMemo } from "react";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { Controller } from "react-hook-form";
import { useGetIconsQuery } from "@/services/icon/iconApi";
import { useGetFeaturesQuery } from "@/services/feature/featureApi";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";

const CategoryDetails = ({ control, errors, prevStep, nextStep }) => {





  const { data: fetchCategoriesData, isCategoriesLoading, categoriesError, categoriesRefetch } = useGetCategoriesQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });
  

  const categories = useMemo(
    () =>
      fetchCategoriesData?.data?.map((category) => (

        {
          id: category._id,
          value: category.title,
          icon: category.icon?.symbol
        }
      )),
    [fetchCategoriesData]
  );



  return (
    <>

      <div className="flex flex-col gap-y-6">
        <label
          htmlFor="subCategories"
          className="flex flex-col text-right gap-y-3"
        >
          دسته بندی والد :
          <div className="col-span-2">
            <Controller
              control={control}
              name={`parentCategory`}
              rules={{
                required: "وارد کردن ویژگی اجباری است",
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  name={"parentCategory"}
                  items={categories}
                  value={value}
                  sendId={true}
                  iconOnly={false}
                  onChange={onChange}
                  placeholder="یک دسته بندی انتخاب کنید"
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
      <div className="flex flex-row-reverse justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />

        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default CategoryDetails;
