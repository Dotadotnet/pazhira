import React from 'react'

export default function captionType({value , info}) {
    
    return (
        <div className="flex justify-center items-center">
            <div className='inline'>
                <h1 className=' text-2xl relative  text-right text-gray-950  dark:text-white ' >
                    {info.name} :
                </h1>
                <br />
                <textarea
                    className={`w-96 ${info.dir == 'ltr' ? 'dir-ltr' : "dir-rtl"}`}
                    name={info.field}
                    id={info.field}
                    rows="8"
                    defaultValue={value}
                    required
                />
            </div>
        </div>
    )
}
