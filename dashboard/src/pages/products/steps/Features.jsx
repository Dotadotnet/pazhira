import React, { useState } from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import FeatureInput from "./featureInput";
import { useGetCategoryQuery } from "@/services/category/categoryApi";
import { Controller } from "react-hook-form";

const Features = ({
  prevStep,
  nextStep,
  register,
  setValue,
  control,
  watch,
  errors
}) => {


  const categoryId = watch("category");
  const features = watch("features");

  const { isSuccess, isLoading, data, error } = useGetCategoryQuery(categoryId);
  if (!isLoading && data.data) {
    let categoryFeature = [...new Set(data.data.features)].map((feature) => ({ feature: feature, value: null }));
    if (JSON.stringify(features) !== JSON.stringify(categoryFeature)) {
      if (!features) {
        setValue("features", categoryFeature)
      } else {
        let isEmpty = features?.filter((feature) => (feature.value !== null))[0] ? false : true;
        if (isEmpty) {
          setValue("features", categoryFeature)
        }
      }
    }
  }


  return (
    <>
      {
        isSuccess ?
          <Controller
            control={control}
            name={`features`}
            rules={{
              required: "وارد کردن ویژگی اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <FeatureInput onChange={onChange} value={value} />
            )}
          />
          : ""
      }
      <div className="flex flex-row-reverse justify-between mt-8">
        <NavigationButton direction="next" onClick={nextStep} />

        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default Features;
