import { useUpdateSettingMutation } from "@/services/setting/settingApi";
import React, { useEffect, useRef, useState } from "react";
import Edit from "@/components/icons/Edit";
import Tick from "@/components/icons/Tick";


function UpdateInput({ item }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(item.value);
    const inputRef = useRef(null);

    const [
        updateSetting,
        { isLoading: isUpdateing, data: updateData, error: updateError },
    ] = useUpdateSettingMutation();





    const fnOpenAndClose = () => {
        if (!open) {
            inputRef.current.focus()
        } else {
            updateSetting({ id: item._id, body: { value: value } });
        }
        setOpen(!open)
    }

    return (
        <label title={item.key} className=" inline-flex flex-col ">
            <span className={` h-full dark:text-white text-gray-950 w-full text-xl font-bold `}>{item.name} :</span>
            <div className="inline-flex  items-center mt-4 mr-8">
                <input ref={inputRef} value={value} onChange={(event) => { setValue(event.target.value) }} type={item.type == "number" ? "number" : "text"} disabled={open ? false : true} onKeyDown={(event) => { if (event.key === 'Enter') { fnOpenAndClose() } }} className={` dark:text-white w-1/2 text-gray-950 overflow-hidden text-xl py-[2px] h-full rounded-lg ${!open ? "opacity-60" : ""}`} />
                <button onClick={fnOpenAndClose} type="button" className="text-white mr-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2 text-center">
                    {
                        open ?
                            <Tick className="size-6 font-bold ml-1" />
                            :
                            <Edit className="size-6 ml-1" />
                    }
                </button>
            </div>
        </label >
    );
}

export default UpdateInput;
