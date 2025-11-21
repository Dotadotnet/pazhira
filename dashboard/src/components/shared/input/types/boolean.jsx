import React from 'react'

export default function booleanType({ value , info }) {
    console.log(value);
    
    return (
        <>
        <h2 className='text-center text-2xl'>{ info.name }</h2>
        <br/>
            <div className='w-full flex justify-center items-center mb-8 '>
                <div className='grid gap-6 w-96  grid-cols-2'>
                    <label htmlFor="bordered-radio-1" className="flex shadow-lg dark:shadow-[rgba(255,255,255,0.1)] items-center cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100  transition-all border border-gray-200 rounded-lg dark:border-gray-700">
                        <input  defaultChecked={ value == false ? true : false } id="bordered-radio-1" type="radio" value="false" name={info.field} className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span className="w-full select-none py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">خیر</span>
                    </label>
                   <label htmlFor="bordered-radio-2" className="flex shadow-lg dark:shadow-[rgba(255,255,255,0.1)] items-center cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 transition-all border border-gray-200 rounded-lg dark:border-gray-700">
                        <input  defaultChecked={ value == true ? true : false } id="bordered-radio-2" type="radio" value="true" name={info.field} className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span className="w-full select-none py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">بله</span>
                    </label>
                </div>
            </div>
        </>
    )
}
