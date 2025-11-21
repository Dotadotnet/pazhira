import React from "react";
import StepAddFeature from "./steps/StepAddFeature";
import ThemeToggle from "@/components/ThemeToggle";
import { useParams } from "react-router";
import { useGetFeatureQuery } from "@/services/feature/featureApi";

function UpdateFeature() {
    let params = useParams();
    let id = params.id;

    const { isSuccess, isLoading, data, error } = useGetFeatureQuery(id);

    if (isSuccess) {
        localStorage.setItem("inputData", JSON.stringify(data.data.data))
    }


    return (
        <section className="w-screen relative h-screen overflow-hidden flex justify-center items-center p-4 ">
            <div className="wave "></div>
            <div className="wave wave2 "></div>
            <div className="wave wave3"></div>
            <div className="max-w-lg w-full  bg-white justify-center dark:bg-gray-900 z-50 flex flex-col gap-y-4  p-8 rounded-primary shadow-lg">
                <div className="flex flex-row  items-center gap-x-2">
                    {
                        isSuccess ?
                            <StepAddFeature prevData={data.data} />
                            :
                            "درحال دریافت اطلاعات"
                    }
                </div>

                <ThemeToggle />
            </div>
        </section>
    );
}

export default UpdateFeature;
