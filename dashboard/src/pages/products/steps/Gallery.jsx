import React, { useState } from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import GalleryUpload from "@/components/shared/gallery/GalleryUpload";
import DisplayImages from "@/components/shared/gallery/DisplayImages";

const GalleryStep = ({ nextStep,watch, prevStep, setGallery, register }) => {
  const images = watch(["gallery"])
  const [galleryPreview, setGalleryPreview] = useState(images[0]?.[0]?.url ? images[0] : null);  
  return (
    <>
      <div className="flex flex-col text-center gap-y-2">
        <GalleryUpload
          setGallery={setGallery}
          setGalleryPreview={setGalleryPreview}
          maxFiles={10}
          register={register("gallery", {
            required: "آپلود حداقل یک تصویر الزامی است",
          })}
          title="آپلود تصاویر گالری"
        />


        <DisplayImages
          galleryPreview={galleryPreview?.map((item) => item)}
          imageSize={150}
        />
      </div>

      <div className=" flex flex-row-reverse justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default GalleryStep;
