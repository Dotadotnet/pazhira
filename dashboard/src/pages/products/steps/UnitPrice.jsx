import React, { useState, useEffect } from "react";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import { Controller, useFieldArray } from "react-hook-form";
import Trash from "@/components/icons/Trash";
import NumberToPersianWord from "number_to_persian_word";
import FeatureInput from "./featureInput";

// کامپوننت UnitPrice
const UnitPrice = ({
  control,
  index,
  remove,
  errors,
  watch,
  units = [],
  techplusOptions = [],
  warrantyOptions = [],
  colorOptions = [],
  sellerOptions = [],
  insuranceOptions = [],
  shipmentMethodOptions = [],
  creatorOptions = []
}) => {
  // const {
  //   fields: badges,
  //   append,
  //   remove: removeBadge
  // } = useFieldArray({
  //   control,
  //   name: `variations.${index}.variant_badges`
  // });

  const campaignState = watch(`variations.${index}.campaignState`);
  const statusOptions = [
    { id: "marketable", value: "قابل فروش" },
    { id: "out_of_stock", value: "تمام شده" },
    { id: "inactive", value: "غیرفعال" },
    { id: "on_sale", value: "در حال فروش" },
    { id: "new_arrival", value: "جدید" },
    { id: "discount", value: "تخفیف‌دار" }
  ];
  const badgeSlotOptions = [
    { value: "topRightCorner", label: "گوشه بالا-راست" },
    { value: "topLeftCorner", label: "گوشه بالا-چپ" },
    { value: "bottomRightCorner", label: "گوشه پایین-راست" },
    { value: "bottomLeftCorner", label: "گوشه پایین-چپ" }
  ];
  const badgeTypeOptions = [
    { value: "special_sell", label: "فروش ویژه" },
    { value: "best_price", label: "بهترین قیمت" },
    { value: "incredible", label: "پیشنهاد شگفت‌انگیز" },
    { value: "new_arrival", label: "جدید" },
    { value: "limited_offer", label: "پیشنهاد محدود" }
  ];
  const [exchangeRate, setExchangeRate] = useState();
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://www.tgju.org/api/v1/currency/USD-IRR"
        ); // یا URL مناسب
        const data = await response.json();
        const rate = data.price / 10;
        setExchangeRate(rate);
      } catch (error) {
        console.error("خطا در دریافت نرخ:", error);
        setExchangeRate(99200);
      }
    };
    fetchExchangeRate();
  }, []);
  return (
    <div className="flex flex-col gap-y-4 w-full  rounded sm:p-6 p-4">
      <div className="grid items-start md:grid-cols-12 gap-x-2 gap-y-4">
        {/* Campaign Section */}
        {/* Price */}
        <div className="col-span-12 flex justify-center items-center">

          <div className="w-full  md:w-1/2 ">
            <span className="mr-6">عنوان این محصول</span>
            <Controller
              control={control}
              name={`variations.${index}.title`}
              rules={{
                required: "عنوان",
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  value={value || ""}
                  onChange={(e) => {
                    const rawValue = e.target.value;
                    onChange(rawValue);
                  }}
                  className="flex-1  my-2 rounded border px-2 py-1 h-10 w-full "
                  placeholder="عنوان را وارد کنید"
                />
              )}
            />
            {errors.variations?.[index]?.stock && (
              <span className="text-red-500 text-sm">
                {errors.variations[index].stock.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-6" >قیمت واحد انتخابی (تومان)</span>
          <Controller
            control={control}
            name={`variations.${index}.price`}
            rules={{
              required: "وارد کردن قیمت الزامی است",
              min: { value: 1, message: "قیمت باید بزرگتر از ۰ باشد" }
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="number"
                inputMode="numeric"
                value={value || ""}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  if (!isNaN(rawValue)) {
                    onChange(Number(rawValue));
                  }
                }}
                className="flex-1 my-2 rounded border px-2 py-1 h-10 w-full "
                placeholder="قیمت را به تومان وارد کنید..."
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.price`}
            render={({ field: { value } }) => (
              <span className="text-green-600 text-sm">
                {"معادل: "}
                <span className="text-green-600">
                  {(value / exchangeRate).toFixed(2)} دلار
                  {" ("}
                  {NumberToPersianWord.convert(value || 0)} تومان
                  {")"}
                </span>
              </span>
            )}
          />
          {errors.variations?.[index]?.price && (
            <span className="text-red-500 mr-2 text-sm">
              {errors.variations[index].price.message}
            </span>
          )}
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-6" >تخفیف</span>
          <Controller
            control={control}
            name={`variations.${index}.offer`}
            rules={{
              min: { value: 0 },
              max: { value: 100 }
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="number"
                inputMode="numeric"
                value={value || ""}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  if (!isNaN(rawValue)) {
                    onChange(Number(rawValue));
                  }
                }}
                min={0}
                max={100}
                className="flex-1 my-2 rounded border px-2 py-1 h-10 w-full "
                placeholder="تخفیف را وارد کنید"
              />
            )}
          />


        </div>

        {/* Stock */}


        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-6">تعداد موجودی</span>
          <Controller
            control={control}
            name={`variations.${index}.stock`}
            rules={{
              required: "تعداد موجودی الزامی است",
              min: { value: 0, message: "موجودی نمی‌تواند منفی باشد" }
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="number"
                inputMode="numeric"
                value={value || ""}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  if (!isNaN(rawValue) && rawValue !== "") {
                    onChange(Number(rawValue));
                  }
                }}
                className="flex-1  mt-3 rounded border px-2 py-1 h-10 w-full "
                placeholder="تعداد موجودی را وارد کنید..."
              />
            )}
          />
          {errors.variations?.[index]?.stock && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].stock.message}
            </span>
          )}
        </div>

        {/* Low Stock Threshold */}
        <div className="col-span-12 md:col-span-6 ">
          <span>حد آستانه موجودی</span>
          <Controller
            control={control}
            name={`variations.${index}.lowStockThreshold`}
            rules={{
              required: "حد آستانه موجودی الزامی است",
              min: { value: 0, message: "حد آستانه نمی‌تواند منفی باشد" }
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="number"
                inputMode="numeric"
                value={value || ""}
                onChange={(e) => {
                  const rawValue = e.target.value;
                  if (!isNaN(rawValue) && rawValue !== "") {
                    onChange(Number(rawValue));
                  }
                }}
                className="flex-1 mt-3 rounded border px-2 py-1 h-10 w-full "
                placeholder="حد آستانه موجودی را وارد کنید..."
              />
            )}
          />
          {errors.variations?.[index]?.lowStockThreshold && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].lowStockThreshold.message}
            </span>
          )}
        </div>

        {/* Status */}
        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-10">وضعیت</span>
          <Controller
            control={control}
            name={`variations.${index}.status`}
            rules={{ required: "انتخاب وضعیت الزامی است" }}
            render={({ field }) => (
              <Dropdown
                items={statusOptions}
                value={field.value}
                onChange={field.onChange}
                placeholder="وضعیت را انتخاب کنید..."
                className="w-full mt-3"
              />
            )}
          />
          {errors.variations?.[index]?.status && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].status.message}
            </span>
          )}
        </div>

        {/* Properties */}
        {/* <div className="col-span-12">
          <span>ویژگی‌ها</span>
          <div className="grid grid-cols-2 gap-2">
            {[
              "is_fast_shipping",
              "is_ship_by_seller",
              "is_multi_warehouse",
              "is_rural",
              "in_techkala_warehouse"
            ].map((prop) => (
              <label key={prop} className="flex items-center gap-x-2">
                <Controller
                  control={control}
                  name={`variations.${index}.properties.${prop}`}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      checked={field.value || false}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
                <span>
                  {prop === "is_fast_shipping" && "ارسال سریع"}
                  {prop === "is_ship_by_seller" && "ارسال توسط فروشنده"}
                  {prop === "is_multi_warehouse" && "چند انباری"}
                  {prop === "is_rural" && "ارسال به روستا"}
                  {prop === "in_techkala_warehouse" && "در انبار تکنوکالا"}
                </span>
              </label>
            ))}
          </div>
          {errors.variations?.[index]?.properties &&
            Object.keys(errors.variations[index].properties).map((prop) => (
              <span key={prop} className="text-red-500 text-sm">
                {errors.variations[index].properties[prop].message}
              </span>
            ))}
        </div> */}



        {/* Color */}
        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-10">رنگ</span>
          <Controller
            control={control}
            name={`variations.${index}.color`}
            rules={{ required: "انتخاب رنگ الزامی است" }}
            render={({ field }) => (
              <Dropdown
                items={colorOptions}
                value={field.value}
                onChange={field.onChange}
                placeholder="رنگ را انتخاب کنید..."
                className="w-full mt-3"
              />
            )}
          />
          {errors.variations?.[index]?.color && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].color.message}
            </span>
          )}
        </div>

        {/* Warranty */}
        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-10">گارانتی</span>
          <Controller
            control={control}
            name={`variations.${index}.warranty`}
            rules={{ required: "انتخاب گارانتی الزامی است" }}
            render={({ field }) => (
              <Dropdown
                items={warrantyOptions}
                onChange={field.onChange}
                value={field.value}
                placeholder="گارانتی را انتخاب کنید..."
                className="w-full mt-3"
              />
            )}
          />
          {errors.variations?.[index]?.warranty && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].warranty.message}
            </span>
          )}
        </div>

        {/* Insurance */}
        <div className="col-span-12 md:col-span-6 ">
          <span className="mr-10">بیمه</span>
          <Controller
            control={control}
            name={`variations.${index}.insurance`}
            rules={{ required: "انتخاب بیمه الزامی است" }}
            render={({ field }) => (
              <Dropdown
                items={insuranceOptions}
                value={field.value}
                onChange={field.onChange}
                placeholder="بیمه را انتخاب کنید..."
                className="w-full mt-3"
              />
            )}
          />
          {errors.variations?.[index]?.insurance && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].insurance.message}
            </span>
          )}
        </div>
        <div className="col-span-12 md:col-span-6 "></div>
        <div className="flex justify-center col-span-12 w-full items-center">
          <div className="w-full bg-gray-900 p-11 rounded-2xl min-h-[60vh] md:w-1/2">
            <Controller
              control={control}
              name={`variations.${index}.features`}
              rules={{ required: "انتخاب بیمه الزامی است" }}
              render={({ field: { onChange, value } }) => (
                <FeatureInput onChange={onChange} value={value} />
              )}
            />
          </div>
        </div>
        {/* Boolean Fields */}
        {/* <div className="col-span-12 md:col-span-4">
          <label className="flex items-center gap-x-2">
            <Controller
              control={control}
              name={`variations.${index}.has_importer_price`}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <span>دارای قیمت واردکننده</span>
          </label>
          {errors.variations?.[index]?.has_importer_price && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].has_importer_price.message}
            </span>
          )}
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="flex items-center gap-x-2">
            <Controller
              control={control}
              name={`variations.${index}.manufacture_price_not_exist`}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <span>عدم وجود قیمت تولیدکننده</span>
          </label>
          {errors.variations?.[index]?.manufacture_price_not_exist && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].manufacture_price_not_exist.message}
            </span>
          )}
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="flex items-center gap-x-2">
            <Controller
              control={control}
              name={`variations.${index}.has_best_price_in_last_month`}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <span>بهترین قیمت در ماه گذشته</span>
          </label>
          {errors.variations?.[index]?.has_best_price_in_last_month && (
            <span className="text-red-500 text-sm">
              {errors.variations[index].has_best_price_in_last_month.message}
            </span>
          )}
        </div> */}

        {/* Variant Badges */}
        {/* <div className="col-span-12">
          <span>افزودن برچسب</span>
          {badges.map((badge, badgeIndex) => (
            <div
              key={badge.id}
              className="flex flex-col gap-y-4 border rounded p-2 mt-2"
            >
              <div className="grid grid-cols-12 gap-x-2 gap-y-4">
                <div className="col-span-12 md:col-span-4">
                  <span>نوع</span>
                  <Controller
                    control={control}
                    name={`variations.${index}.variant_badges.${badgeIndex}.type`}
                    rules={{ required: "نوع برچسب الزامی است" }}
                    render={({ field }) => (
                      <Dropdown
                        items={badgeTypeOptions}
                        placeholder="نوع برچسب را انتخاب کنید..."
                        className="w-full"
                        returnType="value"
                      />
                    )}
                  />
                  {errors.variations?.[index]?.variant_badges?.[badgeIndex]
                    ?.type && (
                    <span className="text-red-500 text-sm">
                      {
                        errors.variations[index].variant_badges[badgeIndex].type
                          .message
                      }
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <span>اسلات</span>
                  <Controller
                    control={control}
                    name={`variations.${index}.variant_badges.${badgeIndex}.slot`}
                    rules={{ required: "اسلات برچسب الزامی است" }}
                    render={({ field }) => (
                      <Dropdown
                        items={badgeSlotOptions}
                        placeholder="اسلات برچسب را انتخاب کنید..."
                        className="w-full"
                        returnType="value"
                      />
                    )}
                  />
                  {errors.variations?.[index]?.variant_badges?.[badgeIndex]
                    ?.slot && (
                    <span className="text-red-500 text-sm">
                      {
                        errors.variations[index].variant_badges[badgeIndex].slot
                          .message
                      }
                    </span>
                  )}
                </div>
                
                <div className="col-span-12 md:col-span-4">
                  <span>متن برچسب</span>
                  <Controller
                    control={control}
                    name={`variations.${index}.variant_badges.${badgeIndex}.payload.text`}
                    rules={{ required: "متن برچسب الزامی است" }}
                    render={({ field }) => (
                      <input
                        type="text"
                        value={field.value || ""}
                        onChange={field.onChange}
                        className="flex-1 rounded border px-2 py-1 h-10 w-full "
                        placeholder="متن برچسب..."
                      />
                    )}
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <span>رنگ متن</span>
                  <Controller
                    control={control}
                    name={`variations.${index}.variant_badges.${badgeIndex}.payload.text_color`}
                    rules={{ required: "انتخاب رنگ الزامی است" }}
                    render={({ field }) => (
                      <Dropdown
                        items={colorOptions}
                        onChange={field.onChange}
                        placeholder="رنگ را انتخاب کنید..."
                        className="w-full"
                      />
                    )}
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <span>آیکون SVG (اختیاری)</span>
                  <Controller
                    control={control}
                    name={`variations.${index}.variant_badges.${badgeIndex}.payload.svg_icon`}
                    render={({ field }) => (
                      <input
                        type="text"
                        value={field.value || ""}
                        onChange={field.onChange}
                        className="flex-1 rounded border px-2 py-1 h-10 w-full "
                        placeholder="آیکون SVG..."
                      />
                    )}
                  />
                </div>
              </div>

              <button
                type="button"
                className="p-1 rounded self-end "
                onClick={() => removeBadge(badgeIndex)}
              >
                <Trash className="w-6 h-6 text-gray-500 hover:text-red-500" />
              </button>
              {errors.variations?.[index]?.variant_badges?.[badgeIndex] &&
                Object.keys(
                  errors.variations[index].variant_badges[badgeIndex]
                ).map((field) => (
                  <span
                    key={`${badgeIndex}.${field}`}
                    className="text-red-500 text-sm"
                  >
                    {errors.variations[index].variant_badges[badgeIndex][field]
                      ?.message ||
                      errors.variations[index].variant_badges[badgeIndex][field]
                        ?.payload?.text?.message ||
                      errors.variations[index].variant_badges[badgeIndex][field]
                        ?.payload?.text_color?.message ||
                      errors.variations[index].variant_badges[badgeIndex][field]
                        ?.payload?.svg_icon?.message}
                  </span>
                ))}
            </div>
          ))}
          <div className="col-span-12">
            <button
              type="button"
              className="bg-blue-100 mt-4 dark:bg-green-100 border border-blue-900 dark:border-green-900 text-blue-900 dark:text-green-900 py-1 rounded flex flex-row gap-x-1 items-center px-2 w-fit text-xs"
              onClick={() =>
                append({
                  type: "",
                  slot: "",
                  priority: 0,
                  payload: { text: "", text_color: "", svg_icon: "" }
                })
              }
            >
              افزودن برچسب
            </button>
          </div>
        </div> */}

        {/* Remove Variant Button */}

        {/* Error Messages */}
        {[
          "campaignTitle",
          "campaignState",
          "discountAmount",
          "unit",
          "price",
          "stock",
          "lowStockThreshold",
          "lead_time",
          "rank",
          "rate",
          "status",
          "techplus",
          "warranty",
          "color",
          "seller",
          "insurance",
          "shipment_methods",
          "has_importer_price",
          "manufacture_price_not_exist",
          "has_best_price_in_last_month",
          "techclub.point"
        ].map(
          (field) =>
            errors.variations?.[index]?.[field] && (
              <span key={field} className="text-red-500 text-sm">
                {errors.variations[index][field].message}
              </span>
            )
        )}
        {errors.variations?.[index]?.properties &&
          Object.keys(errors.variations[index].properties).map((prop) => (
            <span key={prop} className="text-red-500 text-sm">
              {errors.variations[index].properties[prop].message}
            </span>
          ))}
      </div>
    </div>
  );
};

export default UnitPrice;
