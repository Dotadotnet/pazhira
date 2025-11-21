import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useForm } from "react-hook-form";
import SendButton from "@/components/shared/button/SendButton";
import { useAddCategoryMutation, useUpdateCategoryMutation } from "@/services/category/categoryApi";
import ThumbnailStep from "./ThumbnailStep";
import StepIndicator from "./StepIndicator";
import TitleStep from "./TitleStep";
import TagsStep from "./TagsStep";
import { useNavigate } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";


const StepAddCategory = ({ prevData = null }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [addCategory, { isLoading, data, error }] = useAddCategoryMutation();
  
  const [updateCategory, { isLoading: isUpdateing, data: updateData, error: updateError }] = useUpdateCategoryMutation();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [tags, setTags] = useState([""]);
  const [features, setFeatures] = useState([{ icon: '', title: "", content: [""] }]);

  const {
    register,
    setValue,
    reset,
    control,
    formState: { errors },
    trigger,
    handleSubmit,
    watch
  } = useForm({
    mode: "onChange",
    defaultValues: prevData
  });
  const totalSteps = 4;


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("parentCategory", data.parentCategory);
    formData.append("typeCategory", data.typeCategory);
    formData.append("icon", data.icon);
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("features", JSON.stringify(data.features));
    formData.append("title", data.title);
    if (data.category) {
      formData.append("category", data.category);
    }
    formData.append("description", data.description);
    if (prevData) {
      updateCategory({ id: prevData._id, body: formData })
    } else {
      addCategory(formData);
    }

  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال افزودن دسته بندی...", { id: "addCategory" });
    }

     if (isUpdateing) {
      toast.loading("در حال اعمال تغییرات ...", { id: "addCategory" });
    }

    if (data?.acknowledgement) {
      toast.success(data?.description, { id: "addCategory" });
      navigate("/categories");
    }

    if (updateData?.acknowledgement) {
      toast.success(updateData?.description, { id: "addCategory" });
      window.location.reload();
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "addCategory" });
    }
  }, [isLoading , isUpdateing , data, updateData, error]);

  const nextStep = async () => {
    let valid = true;


    if (valid) {
      setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
      setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <ThumbnailStep
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            nextStep={nextStep}
            register={register}
            watch={watch}
            control={control}
            errors={errors.thumbnail}
          />
        );
      case 2:
        return (
          <TitleStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <CategoryDetails
            features={features}
            setFeatures={setFeatures}
            register={register}
            control={control}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );

      case 4:
        return (
          <TagsStep
            tags={tags}
            setTags={setTags}
            register={register}
            errors={errors}
            control={control}
          />
        );

      default:
        return null;
    }
  };
  const handleStepClick = async (step) => {
    if (step < currentStep) {
      setCurrentStep(step);
    } else if (step > currentStep) {
      let canProceed = true;
      for (let i = 1; i < step; i++) {
        if (!completedSteps[i]) {
          canProceed = false;
          toast.error(`لطفاً ابتدا مرحله ${i} را تکمیل کنید.`);
          setCurrentStep(i);
          break;
        }
      }
      if (canProceed) {
        setCurrentStep(step);
      }
    }
  };


  return (
    <form
      action=""
      className="w-full max-w-xl  flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StepIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={handleStepClick}
        completedSteps={completedSteps}
        invalidSteps={invalidSteps}
      />

      {renderStepContent(currentStep)}

      {currentStep === totalSteps && (
        <div className="flex flex-row-reverse justify-between mt-12">
          <SendButton />
          <NavigationButton direction="prev" onClick={prevStep} />
        </div>
      )}
    </form>
  );
};

export default StepAddCategory;
