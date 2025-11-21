import {  CSSProperties } from "react";
import { BounceLoader } from "react-spinners";
function SubmitButtonForm({submiting , setSubmiting}) {


    return (
        <button onClick={(event) => {  setTimeout(() => {event.preventDefault(); } , 500) ,  setSubmiting(true) }} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {
                submiting ?
                    <div className="flex items-center">
                        <BounceLoader color="#ffffff" size={30} />
                        <span className="mr-2 text-white">
                            درحال پردازش
                        </span>
                    </div>
                    :
                    "ثبت تغییرات"
            }

        </button>
    );
}

export default SubmitButtonForm;

