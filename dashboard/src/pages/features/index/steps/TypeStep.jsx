// components/signup/steps/NameStep.jsx
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useGetFeatureTypesQuery } from "@/services/featureType/featureTypeApi";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import InputTypeFeature from "./InputTypeFeature";

const TypeStep = ({ register, errors, control, prevStep, nextStep, watch }) => {
  const type = watch("type");
  const data = watch("data");

  const { data: fetchFeatureTypeData, isLoading, error, refetch } = useGetFeatureTypesQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });



  const featureTypes = useMemo(
    () =>
      fetchFeatureTypeData?.data?.map((featureType) => ({
        id: featureType._id,
        value: featureType.nameFa,
        nameEn: featureType.nameEn,
      })),
    [fetchFeatureTypeData]
  );

  return (
    <>

      <label
        htmlFor="type"
        className="flex flex-col text-right"
      >
        <span className="mb-3">
          نوع ویژگی :
        </span>
        <div className="col-span-2">
          <Controller
            control={control}
            name={`type`}
            rules={{
              required: "وارد کردن نوع ویژگی اجباری است",
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Dropdown
                    items={featureTypes}
                    placeholder=""
                    value={value}
                    onChange={onChange}
                    sendId={true}
                    iconOnly={false}
                    className="w-full"
                    error={errors?.featureType}
                  />
                  {
                    !isLoading ?
                      <label htmlFor="data" className={"flex flex-col" + (type ? " mt-4 " : "")}>
                        <InputTypeFeature
                          preValue={data} type={featureTypes.filter((featureType) => { if (featureType.id == type) { return (featureType) } })[0]?.nameEn} />
                        {errors.data && (
                          <span className="text-red-500 text-sm">{errors.data.message}</span>
                        )}
                      </label>
                      :
                      ""
                  }
                </>
              )
            }}
          />
        </div>
        {errors?.type && (
          <span className="text-red-500 text-sm">
            {errors?.type.message}
          </span>
        )}
      </label>







    </>
  );
};

export default TypeStep;
