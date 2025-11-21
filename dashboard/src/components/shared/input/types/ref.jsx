import React, { useEffect, useState } from 'react'
import axios from "@/utils/axios";
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { getDescription, getTitle } from "@/utils/fieldsSomeSide"
import ModalShowId from "@/utils/modalShowItem"
export default function refType({ value, info }) {
    const [items, setItems] = useState(null);
    const valueToArray = Array.isArray(value) ? value : [value];
    const [itemsSelected, setItemsSelected] = useState(valueToArray.map(value => value._id));
    const [searchString, setSearchString] = useState(null);
    const [filterMode, setFilterMode] = useState("all");
    const [showModelId, setShowModelId] = useState(null);

    useEffect(() => {
        if (items == null) {
            axios.get('/dynamic/get-all/' + info.data[0]).then(res => {
                let response = res.data.data;
                setItems(response)
            })
        }
    })
    const selectItem = (id, event) => {
        if (!event.target.classList.contains("show-button")) {
            if (itemsSelected.includes(id)) {
                setItemsSelected(
                    itemsSelected.filter((itemsSelectedId) => {
                        if (id !== itemsSelectedId) {
                            return itemsSelectedId;
                        }
                    })
                )
            } else {
                if (info.multiple) {
                    setItemsSelected(prevItems => [...prevItems, id]);
                } else {
                    setItemsSelected([id])
                }
            }
        }
    }
    const filterState = () => {
        let result = items;
        if (searchString) {
            result = result.filter((item) => {
                if (getTitle(item).toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
                    return (
                        item
                    )
            });
        }
        if (filterMode == "false") {
            result = result.filter((item) => {
                if (!itemsSelected.includes(item._id)) {
                    return (
                        item
                    )
                }
            })
        } else if (filterMode == "true") {
            result = result.filter((item) => {
                if (itemsSelected.includes(item._id)) {
                    return (
                        item
                    )
                }
            })
        }
        return result;
    }
    return (
        <>
            <input className='hidden' name={info.field} value={JSON.stringify(itemsSelected)} />
            <div className=' flex items-center '>
                <span className='sm:text-3xl mr-6 text-gray-900 font-bold dark:text-white text-2xl'>
                    {info.name}
                </span>
            </div>
            <div className="m-6 md:flex md:flex-row-reverse md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border rounded-lg dark:!bg-[#0a2d4d] dark:border-blue-500 rtl:flex-row">
                    <button
                        type="button"
                        onClick={() => {
                            setFilterMode("all")
                        }}
                        className={"px-5 py-2  text-xs font-medium transition-colors duration-200 sm:text-sm   border-l dark:border-blue-500   " + (filterMode == "all" ? " bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white font-bold  " : " text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-[#0a2d4d] ")}
                    >
                        همه موارد
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setFilterMode("true")
                        }}
                        className={"px-5 py-2  text-xs font-medium transition-colors duration-200 sm:text-sm   border-l dark:border-blue-500  " + (filterMode == "true" ? " bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white font-bold  " : " text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#0a2d4d] ")}>
                        انتخاب شده ها
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setFilterMode("false")
                        }}
                        className={"px-5 py-2  text-xs font-medium transition-colors duration-200 sm:text-sm   border-l dark:border-blue-500  " + (filterMode == "false" ? " bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white font-bold  " : " text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#0a2d4d] ")}>
                        انتخاب نشده ها
                    </button>
                </div>
                <div className="relative flex items-center mt-4 md:mt-0">
                    <span className="absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="جستجو"
                        onChange={(event) => {
                            setSearchString(event.target.value)
                        }}
                        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                <div className="after:absolute w-full after:top-0 my-5 after:h-2  after:w-full after:content-[''] after:right-0 after:bg-gradient-to-t after:from-transparent after:to-white dark:after:to-[#121212]  before:absolute before:bottom-0 before:h-2  before:w-full before:content-[''] before:left-0 before:bg-gradient-to-b before:from-transparent before:to-white dark:before:to-[#121212] relative ">
                    <div className="max-h-[60vh] w-full overflow-y-auto px-5">
                        {
                            items ?
                                <div className='flex flex-wrap justify-center gap-x-7 p-6 gap-y-5 sm:grid-cols-2'>
                                    {
                                        filterState(items).length ?
                                            filterState(items).map((item) => {
                                                return (
                                                    <div key={item._id} title={getDescription(item)} onClick={() => { selectItem(item._id, event) }} className={'px-5 py-3 cursor-pointer rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all relative bg-gray-100 min-w-80 dark:bg-gray-800 ' + (itemsSelected.includes(item._id) ? " border-[1px] border-green-600  " : "")}>
                                                        <div className='w-full flex justify-between'>
                                                            <span dangerouslySetInnerHTML={{ __html: (searchString ? getTitle(item).toLocaleLowerCase().replaceAll(searchString.toLocaleLowerCase(), `<span class="text-blue-600" >${searchString}</span>`) : getTitle(item)) }} className='font-bold select-none overflow-hidden flex items-center text-lg text-black dark:text-white' />
                                                            <span className='flex items-center'>
                                                                <button type="button" className="text-white relative  ml-3  flex justify-center items-center text-xl size-8 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center">
                                                                    <div onClick={() => { setShowModelId(item._id) }} className='absolute size-12 show-button -top-2 -left-2'></div>
                                                                    <FaEye />
                                                                </button>
                                                                <div className='size-6 border-[1px] dark:border-gray-400 overflow-hidden text-blue-600 bg-white border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 '>
                                                                    {itemsSelected.includes(item._id) ?
                                                                        <div className="size-full text-white flex justify-center items-center bg-green-600">
                                                                            <FaCheck className='text-md font-bold' />
                                                                        </div>
                                                                        : ""}
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : <h1 className=' dark:text-white text-gray-900 font-bold text-center text-2xl sm:text-3xl my-10 w-full ' >موردی یافت نشد</h1>
                                    }
                                </div>
                                : <h1 className='text-center  '>درحال بارگیری ...</h1>
                        }
                    </div>
                </div>
            </div>
            <ModalShowId setId={setShowModelId} id={showModelId} />
        </>
    )
}

