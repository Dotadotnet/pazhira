import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import NavigationButton from "@/components/shared/button/NavigationButton";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import {
    useGetIconsQuery,
} from "@/services/icon/iconApi";
const DescriptionStep = ({ register, errors, control, prevStep, nextStep }) => {
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
            <label
                htmlFor="icon"
                className="flex flex-col text-right gap-y-2"
            >
                آیکون :
                <div className="col-span-2">
                    <Controller
                        control={control}
                        name={`icon`}
                        rules={{
                            required: "وارد کردن آیکون اجباری است",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Dropdown
                                items={icons}
                                onChange={onChange}
                                placeholder=""
                                value={value}
                                sendId={true}
                                iconOnly={false}
                                className="w-full"
                                error={errors?.icons}
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
            <label htmlFor="description" className="w-full flex flex-col gap-y-1">
                <span className="text-sm">توضیحات :</span>
                <textarea
                    name="description"
                    id="description"
                    rows="4"
                    maxLength="500"
                    {...register("description")}
                    required
                />
                {errors.description && (
                    <span className="text-red-500 text-sm">
                        {errors.description.message}
                    </span>
                )}
            </label>

            <div className="flex justify-between mt-12">
                <NavigationButton direction="prev" onClick={prevStep} />
                <NavigationButton  direction="next" onClick={nextStep} />
            </div>
        </>
    );
};

export default DescriptionStep;
