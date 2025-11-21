import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import NavigationButton from "@/components/shared/button/NavigationButton";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import {
  useGetIconsQuery,
} from "@/services/icon/iconApi";
const NameStep = ({ register, errors, control, prevStep, nextStep }) => {
  const {
    isLoading: fetchingIcons,
    data: fetchIconsData,
    error: fetchIconsError
  } = useGetIconsQuery({
    page: 1,
    limit: Infinity,
    status: "all",
    search: ""
  });

  const icons = useMemo(
    () =>
      fetchIconsData?.data?.map((icon) => ({
        id: icon._id,
        value: icon.title,
        icon: icon.symbol,
        about: icon.about
      })),
    [fetchIconsData]
  );
  return (
    <>
      <label htmlFor="nameFa" className="flex flex-col gap-y-3">
        <span className="text-sm"> نام ویژگی ( فارسی ) : </span>
        <input
          type="text"
          name="nameFa"
          id="nameFa"
          {...register("nameFa", {
            required: "وارد کردن نام الزامی است",
            minLength: {
              value: 3,
              message: "نام باید حداقل ۳ حرف داشته باشد"
            },
            maxLength: {
              value: 30,
              message: "نام نباید بیشتر از ۳۰ حرف باشد"
            }
          })}
          placeholder="نام ویژگی خود را وارد کنید"
          maxLength="100"
          required
          className="p-2 rounded border "
        />

        {errors.nameFa && (
          <span className="text-red-500 text-sm">{errors.nameFa.message}</span>
        )}
      </label>
      <label htmlFor="nameEn" className="flex flex-col gap-y-3">
        <span className="text-sm"> شناسه ( انگلیسی ) : </span>
        <input
          type="text"
          name="nameEn"
          id="nameEn"
          {...register("nameEn", {
            required: "وارد کردن شناسه الزامی است",
            minLength: {
              value: 3,
              message: "شناسه باید حداقل ۳ حرف داشته باشد"
            },
            maxLength: {
              value: 30,
              message: "شناسه نباید بیشتر از ۳۰ حرف باشد"
            }
          })}
          placeholder="شناسه ویژگی خود را وارد کنید"
          maxLength="100"
          required
          className="p-2 rounded border "
        />

        {errors.nameEn && (
          <span className="text-red-500 text-sm">{errors.nameEn.message}</span>
        )}
      </label>

      <div className="flex justify-end mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
};

export default NameStep;
