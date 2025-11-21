import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import NavigationButton from "@/components/shared/button/NavigationButton";
import { useForm } from "react-hook-form";
import SendButton from "@/components/shared/button/SendButton";
import ThumbnailStep from "./NameStep";
import StepIndicator from "./StepIndicator";
import TypeStep from "./TypeStep";
import { useNavigate } from "react-router-dom";
import NameStep from "./NameStep";
import { useAddFeatureMutation, useUpdateFeatureMutation } from "@/services/feature/featureApi";
import DescriptionStep from "./DescriptionStep";

const StepAddFeature = ({ prevData }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [addFeature, { isLoading, data, error }] = useAddFeatureMutation();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});
  const [invalidSteps, setInvalidSteps] = useState({});
  const [tags, setTags] = useState([""]);
  const [keynotes, setKeynotes] = useState([""]);

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
  const totalSteps = 3;


  const [
    updateFeature,
    { isLoading: isUpdateing, data: updateData, error: updateError },
  ] = useUpdateFeatureMutation();


  const onSubmit = async (data) => {
    let preData = data;
    preData["data"] = localStorage.getItem("inputData")
    if (prevData) {
      updateFeature({ id: prevData.featureId, body: preData })
    } else {
      addFeature(data);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال افزودن ویژگی ...", { id: "addFeature" });
    }

    if (data?.acknowledgement) {
      toast.success(data?.description, { id: "addFeature" });
      navigate("/features");
    }

    if (updateData?.acknowledgement && !isUpdateing) {
      toast.success(updateData?.description);
      navigate("/features/" + prevData.featureId);
    }

    if (error) {
      toast.error(data?.description, { id: "addFeature" });
    }
    if (error?.data) {
      toast.error(error?.data?.description, { id: "addFeature" });
    }
  }, [isLoading, data, error]);

  const nextStep = async () => {
    let valid = false;
    switch (currentStep) {
      case 1:
        let validNameFa = await trigger("nameFa");
        let validNameEn = await trigger("nameEn");
        let validIcon = await trigger("icon");
        let collection = [validIcon, validNameEn, validNameFa]
        if (collection.includes(false)) {
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 2:
        valid = await trigger("title");
        if (!valid) {
          toast.error("لطفاً عنوان دسته بندی را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = await trigger("description");
        if (!valid) {
          toast.error("لطفاً توضیحات دسته بندی را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;

      default:
        break;
    }

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
          <NameStep
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            nextStep={nextStep}
            register={register}
            watch={watch}
            control={control}
            errors={errors}
          />
        );
      case 2:
        return (
          <DescriptionStep
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            nextStep={nextStep}
            register={register}
            prevStep={prevStep}
            watch={watch}
            control={control}
            errors={errors}
          />
        );
      case 3:
        return (
          <TypeStep
            register={register}
            errors={errors}
            control={control}
            prevStep={prevStep}
            watch={watch}
            nextStep={nextStep}
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
      <div className="px-28">
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepClick={handleStepClick}
          completedSteps={completedSteps}
          invalidSteps={invalidSteps}
        />
      </div>

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

export default StepAddFeature;
