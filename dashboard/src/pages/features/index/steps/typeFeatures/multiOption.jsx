import { useEffect, useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Edit from "@/components/icons/Edit";
import Apply from "@/components/icons/Apply";
import Trash from "@/components/icons/Trash";
import Plus from "@/components/icons/Plus";
import Move from "@/components/icons/Move";
import Show from "@/components/icons/Show";
import Hide from "@/components/icons/Hide";

function MultiOption({ value }) {
    let resultValue = value ? typeof value == "object" ? value : JSON.parse(value) : [];
    const [data, setData] = useState(Array.isArray(resultValue) ? resultValue.map((item) => { return ({ data: item, show: false }) }) : []);

    const handleShowHidden = (item, index) => {
        setData(data.map((record, i) => {
            let object = record;
            if (i == index) {
                object.show = !item.show;
            }
            return object;
        }))
    }

    let closed_count = 0;
    let opened_count = 0;
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (item.show) {
                opened_count++
            } else {
                closed_count++
            }
        });
    }

    localStorage.setItem("inputData", JSON.stringify(data.map((item) => { return item.data })))

    return (
        <>
            <div className="justify-between items-center flex mb-4 mx-10">
                <div>
                    <button type="button" onClick={() => {
                        setData(prevItems => [...prevItems, { data: { nameEn: "", nameFa: "" }, show: false, chosen: false, selected: false }]);
                    }} className="text-white inline-flex select-none items-center bg-gradient-to-r from-green-400 text-lg via-green-500 to-green-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-3 py-1 text-center ">
                        <Plus className="text-white ml-1 size-5 font-bold" />
                        اضافه کردن
                    </button>
                </div>

            </div >
            {
                data.length
                    ?
                    <div className="after:absolute after:top-0 after:h-2  after:w-full after:content-[''] after:right-0 after:bg-gradient-to-t after:from-transparent after:to-white dark:after:to-gray-900  before:absolute before:bottom-0 before:h-2  before:w-full before:content-[''] before:left-0 before:bg-gradient-to-b before:from-transparent before:to-white dark:before:to-gray-900 relative ">
                        <div className="max-h-[50vh] pt-3 overflow-y-auto px-5">
                            <ReactSortable
                                animation={300}
                                delayOnTouchStart={true}
                                delay={2}
                                list={data}
                                setList={setData}
                                handle={'.handle'}
                            >
                                {data.map((item, index) => (
                                    <div key={index} className={"pb-2 px-5 mb-5 rounded-lg w-full bg-gray-100 dark:bg-gray-800 "
                                        + (item.show ? "pt-5" : "pt-2")} >
                                        <div className="flex-col w-full">
                                            <div className="flex justify-between">
                                                <div className="flex items-center  text-md">
                                                    {item.data.nameFa && item.data.nameEn ?
                                                        item.data.nameFa
                                                        :
                                                        !item.data.nameFa
                                                            ?
                                                            <span className="text-red-600"> نام وارد نشده  </span>
                                                            :
                                                            <span className="text-red-600"> شناسه وارد نشده  </span>
                                                    }
                                                </div>
                                                <div className="flex justify-center items-center" >
                                                    <button onClick={() => { handleShowHidden(item, index) }} type="button"
                                                        className="text-white select-none size-8 flex justify-center items-center bg-gradient-to-r from-cyan-500 via-cyan-600   to-cyan-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm  text-center">
                                                        {
                                                            item.show ?
                                                                <Hide className="text-white size-5 " />
                                                                :
                                                                <Show className="text-white size-5 " />
                                                        }
                                                    </button>
                                                    <button onClick={() => {
                                                        setData(data.filter((record, i) => {
                                                            if (i !== index) {
                                                                return record;
                                                            }
                                                        }))
                                                    }}
                                                        type="button"
                                                        className="text-white select-none size-8 flex justify-center items-center bg-gradient-to-r mx-5 from-red-500 via-red-600  to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center ">
                                                        <Trash className="text-white size-5 " />
                                                    </button>
                                                    <button type="button" className="text-white select-none size-8 flex justify-center items-center bg-gradient-to-r  from-blue-500 via-blue-600 hover:cursor-grab handle active:cursor-grabbing  to-blue-700 hover:bg-gradient-to-br  font-medium rounded-lg  text-center">
                                                        <Move className="text-white size-4 " />
                                                    </button>
                                                </div>
                                            </div>

                                            {
                                                item.show ?
                                                    <div className="w-full  mt-5 mb-1 px-7">
                                                        <div className="bg-gray-200 dark:bg-gray-900 rounded-md h-0.5 w-full" > </div>
                                                        <div className="mt-4">
                                                            <label htmlFor="nameFa" className="w-full mr-3  h-fit">
                                                                نام ( فارسی ) :
                                                                <input
                                                                    onChange={(event) => {
                                                                        setData(data.map((record, i) => {
                                                                            let object = record;
                                                                            if (i == index) {
                                                                                object.data.nameFa = event.target.value;
                                                                            }
                                                                            return object;
                                                                        }))
                                                                    }}
                                                                    autoComplete={"off"}
                                                                    id="nameFa"
                                                                    placeholder="نام را وارد کنید"
                                                                    className="w-full mt-3 rounded-lg"
                                                                    key={index + "text"}
                                                                    value={item.data.nameFa} />
                                                            </label>
                                                        </div>
                                                        <div className=" mb-3 mt-3">
                                                            <label htmlFor="nameEn" className="w-full mr-3  h-fit">
                                                                شناسه ( انگلیسی ) :
                                                                <input
                                                                    autoComplete={"off"}
                                                                    onChange={(event) => {
                                                                        setData(data.map((record, i) => {
                                                                            let object = record;
                                                                            if (i == index) {
                                                                                object.data.nameEn = event.target.value;
                                                                            }
                                                                            return object;
                                                                        }))
                                                                    }}
                                                                    id="nameEn"
                                                                    placeholder="شناسه را وارد کنید"
                                                                    className="w-full mt-3 rounded-lg"
                                                                    key={index + "text"}
                                                                    value={item.data.nameEn} />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    :
                                                    ''
                                            }

                                        </div>
                                    </div>
                                ))}
                            </ReactSortable>
                        </div>
                    </div>
                    :
                    <div className=" text-center my-5 text-xl text-gray-950 dark:text-white ">هیچ موردی وجود ندارد</div>
            }
        </>

    );
}

export default MultiOption;