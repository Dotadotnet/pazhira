
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useGetFeaturesQuery } from "@/services/feature/featureApi";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import Plus from "@/components/icons/Plus";
import { ReactSortable } from "react-sortablejs";
import Edit from "@/components/icons/Edit";
import Apply from "@/components/icons/Apply";
import Trash from "@/components/icons/Trash";
import Move from "@/components/icons/Move";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";

const modules = import.meta.glob("./typeFeaturesInput/*.jsx");

function FeatureInput({ onChange, value }) {

    const [featureSelected, setFeatureSelected] = useState(value ? value : []);

    const { data: fetchFeatureData, isLoading, error, refetch } = useGetFeaturesQuery({
        page: 1,
        limit: Infinity,
        status: "all",
        search: ""
    });

    const featuresForInput = useMemo(
        () =>
            fetchFeatureData?.data?.map((feature) => (
                {
                    id: feature._id,
                    value: feature.nameFa,
                    label: feature.nameEn,
                    icon: feature.icon.symbol
                }

            )),
        [fetchFeatureData]
    );
    useEffect(() => {
        let estandardData = featureSelected.map((feature) => ({ feature: feature.feature, value: feature.value }));
        onChange(estandardData)
    }, [featureSelected])
    const onChangeFromMultiSelect = (data) => {
        let preFeatures = {};
        featureSelected.forEach(feature => {
            preFeatures[feature.feature] = feature.value
        });
        let resultFeature = data.map((id) => (preFeatures[id] ? { feature: id, value: preFeatures[id] } : { feature: id, value: null }))
        setFeatureSelected(resultFeature)
    }

    // console.log(estandardData);

    // if(JSON.stringify(estandardData) !== JSON.stringify(value)){        
    //     onChange(estandardData)
    // }

    return (
        <>
            {
                !isLoading ?
                    <>
                        <MultiSelect
                            name={"addFeature"}
                            items={featuresForInput}
                            selectedItems={featureSelected.map((feature) => (feature.feature))}
                            handleSelect={onChangeFromMultiSelect}
                            placeholder="چند مورد انتخاب کنید"
                            returnType="id"
                            className={"w-full"}
                        />
                        {
                            featureSelected.length ?
                                <div className="after:absolute after:top-0 after:h-2  after:w-full after:content-[''] after:right-0 after:bg-gradient-to-t after:from-transparent after:to-white dark:after:to-gray-900  before:absolute before:bottom-0 before:h-2  before:w-full before:content-[''] before:left-0 before:bg-gradient-to-b before:from-transparent before:to-white dark:before:to-gray-900 relative ">
                                    <div className="max-h-[50vh] py-4  overflow-y-auto px-5">
                                        <ReactSortable
                                            animation={300}
                                            delayOnTouchStart={true}
                                            delay={2}
                                            list={featureSelected}
                                            setList={setFeatureSelected}
                                            handle={'.handle'}
                                        >
                                            {featureSelected.map((featureData, index) => {

                                                let feature = fetchFeatureData.data.filter((feature) => (feature._id == featureData.feature))[0];
                                                let path = './typeFeaturesInput/' + (feature.type ? feature.type.nameEn : "none") + ".jsx";
                                                const loader = modules[path] || modules["./typeFeaturesInput/error.jsx"];
                                                var MyDynamicComponent = lazy(loader)

                                                return (
                                                    <div key={feature._id} className="p-1.5 w-full  bg-gray-100 dark:bg-gray-800" >
                                                        <div className="flex-col w-full">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center pr-2 text-sm">
                                                                    <div >
                                                                        {feature.nameFa}
                                                                    </div>

                                                                </div>
                                                                <div className=" h-full overflow-hidden justify-center items-center flex">
                                                                    <Suspense>
                                                                        <MyDynamicComponent onChange={
                                                                            (value) => {
                                                                                let editedData = featureSelected.filter((featureItem) => {
                                                                                    let resultFeature = featureItem;
                                                                                    if (featureItem.feature == featureData.feature) {
                                                                                        resultFeature.value = value
                                                                                    }
                                                                                    return resultFeature
                                                                                });
                                                                                setFeatureSelected(editedData)
                                                                            }
                                                                        } value={featureData.value} data={feature} />
                                                                    </Suspense>
                                                                </div>
                                                                <div className="flex justify-center items-center" >
                                                                    <button
                                                                        onClick={() => {
                                                                            setFeatureSelected(featureSelected.filter((feature) => (feature.feature !== featureData.feature)))
                                                                        }}
                                                                        type="button" className="text-gray-900 dark:text-white hover:opacity-100 transition-all cursor-pointer  select-none size-6 ml-2 flex justify-center items-center bg-gradient-to-r opacity-70  handle  hover:bg-gradient-to-br  font-medium rounded-lg  text-center">
                                                                        <Trash className=" size-5 " />
                                                                    </button>
                                                                    <button type="button" className="text-gray-900  hover:opacity-100 transition-all dark:text-white select-none size-6 flex justify-center items-center bg-gradient-to-r ml-1 opacity-70  hover:cursor-grab handle active:cursor-grabbing  hover:bg-gradient-to-br  font-medium rounded-lg  text-center">
                                                                        <Move className=" size-4 " />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </ReactSortable>
                                    </div>
                                </div>
                                :
                                <h1 className="text-2xl text-center mt-10">هیچ ویژگی ای اضافه نشده</h1>
                        }
                    </>
                    :
                    <h1 className="text-xl text-center my-9">درحال بارگزاری</h1>
            }



        </>
    );
}

export default FeatureInput;