import React, { FC, useState, useRef, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import MyEditor from "../../../../../components/shared/editor/RTEditor";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { RiDragMove2Line } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";
import { useId } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function loadingType({ value, info }) {
    const inputRef = useRef(null);
    const [data, setData] = useState(Array.isArray(value) ? value.map((item) => { return ({ data: item, show: false }) }) : value);
    const info_field = info.data[0];
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    })

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
    return (
        <>
            {
                Array.isArray(data) ?
                    <>
                        <input className="hidden" name="input" value={JSON.stringify(data.map((item) => { return item.data }))} />
                        <div className="justify-between items-center flex mx-10">
                            <div>
                                <button type="button" onClick={() => {
                                    setData(prevItems => [...prevItems, { data: "", show: true, chosen: false, selected: false }]);
                                }} className="text-white inline-flex items-center bg-gradient-to-r from-green-400 text-xl via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
                                    <IoMdAddCircleOutline className="text-white ml-3 text-3xl" />
                                    اضافه کردن
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => {
                                        setData(data.map((item) => {
                                            let result = item;
                                            if (closed_count > opened_count) {
                                                result["show"] = true
                                            } else {
                                                result["show"] = false
                                            }
                                            return result;
                                        }))
                                    }}
                                    type="button" className="text-white text-lg inline-flex items-center bg-gradient-to-r from-cyan-500 via-cyan-600   to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2 text-center">
                                    {
                                        closed_count > opened_count ?
                                            <>
                                                <BiSolidShow className="text-white ml-2 text-2xl" />
                                                <span className="text-white">
                                                    باز کردن همه
                                                </span>
                                            </>
                                            :
                                            <>
                                                <BiSolidHide className="text-white ml-2 text-2xl" />
                                                <span className="text-white">
                                                    بستن همه
                                                </span>
                                            </>
                                    }

                                </button>
                                <button
                                    onClick={() => {
                                        if (confirm("آیا از حذف تمام موارد اطمینان دارید ؟") == true) {
                                            setData(data.filter((record, i) => {
                                                if (false) {
                                                    return record;
                                                }
                                            }))
                                        }
                                    }}
                                    type="button" className="text-white text-lg inline-flex items-center bg-gradient-to-r mr-3 from-red-500 via-red-600   to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm p-2 text-center">
                                    <FaTrashCan className="text-white ml-2 text-2xl" />
                                    <span className="text-white">
                                        حذف تمام موارد
                                    </span>
                                </button>
                            </div>
                        </div >
                        {
                            data.length
                                ?
                                <div className="after:absolute after:top-0 after:h-10  after:w-full after:content-[''] after:right-0 after:bg-gradient-to-t after:from-transparent after:to-white dark:after:to-[#121212]  before:absolute before:bottom-0 before:h-10  before:w-full before:content-[''] before:left-0 before:bg-gradient-to-b before:from-transparent before:to-white dark:before:to-[#121212] relative ">
                                    <div className="max-h-[60vh] mt-2 overflow-y-auto px-5">
                                        <ReactSortable
                                            animation={300}
                                            delayOnTouchStart={true}
                                            delay={2}
                                            list={data}
                                            setList={setData}
                                            handle={'.handle'}
                                        >
                                            {data.map((item, index) => (
                                                <div key={index} className="p-4 my-5 rounded-lg w-full shadow-lg dark:shadow-gray-700 bg-gray-100 dark:bg-gray-800" >
                                                    <div className="flex-col w-full">
                                                        <div className="flex justify-between">
                                                            <div className="flex items-center text-xl">{info.nameType + " " + info.name}</div>
                                                            <div className="flex" >
                                                                <button onClick={() => { handleShowHidden(item, index) }} type="button"
                                                                    className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600   to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2 text-center">
                                                                    {
                                                                        item.show ?
                                                                            <BiSolidShow className="text-white text-2xl" />
                                                                            :
                                                                            <BiSolidHide className="text-white text-2xl" />
                                                                    }
                                                                </button>
                                                                <button onClick={() => {
                                                                    if (confirm("آیا از حذف این مورد اطمینان دارید ؟") == true) {
                                                                        setData(data.filter((record, i) => {
                                                                            if (i !== index) {
                                                                                return record;
                                                                            }
                                                                        }))
                                                                    }
                                                                }}
                                                                    type="button"
                                                                    className="text-white bg-gradient-to-r mx-5 from-red-500 via-red-600  to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm p-2 text-center ">
                                                                    <FaTrashCan className="text-white text-2xl" />
                                                                </button>
                                                                <button type="button" className="text-white bg-gradient-to-r ml-3 from-blue-500 via-blue-600 hover:cursor-grab handle active:cursor-grabbing  to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-2 text-center">
                                                                    <RiDragMove2Line className="text-white text-2xl" />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {
                                                            item.show ?
                                                                <div className="w-full mt-5 px-7">
                                                                    <input
                                                                        onChange={(event) => {
                                                                            setData(data.map((record, i) => {
                                                                                let object = record;
                                                                                if (i == index) {
                                                                                    object.data = event.target.value;
                                                                                }
                                                                                return object;
                                                                            }))
                                                                        }}
                                                                        maxLength={info_field ? info_field.maxLength : null}
                                                                        minLength={info_field ? info_field.minLength : null}
                                                                        className="w-full rounded-lg"
                                                                        key={index + "text"}
                                                                        placeholder={"متن" + " " + info.name + " " + "را وارد کنید"}
                                                                        value={item.data} />
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
                                <div className=" text-center my-10 text-4xl text-gray-950 dark:text-white ">هیچ موردی وجود ندارد</div>
                        }
                    </>
                    :
                    <div className="flex justify-center w-full items-center">
                        <label className="w-96 flex-col " htmlFor="input">
                            <div>
                                <h2 className="text-xl  mb-5 mr-3"> {info.name + " :"} </h2>
                            </div>
                            <div>
                                <input ref={inputRef}
                                    className="w-96 mb-5 rounded-lg"
                                    minLength={info_field ? info_field.minLength : null}
                                    maxLength={info_field ? info_field.maxLength : null}
                                    placeholder={"متن" + " " + info.name + " " + "را وارد کنید"}
                                    name="input" defaultValue={data}
                                    id="input" />
                            </div>
                        </label>

                    </div>

            }
        </>
    )
} 