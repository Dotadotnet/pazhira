import { cloneElement } from "react";

function CardCategory({  svg , name , link = '/' }) {
    return (
        <a href={link} className="size-44 sm:size-60 group transition-all shadow-primary-300 cursor-pointer dark:shadow-gray-300 hover:shadow-lg flex-col flex bg-gray-200 dark:bg-gray-800 rounded-4xl" >
            <div className="h-1/2 relative">
                <div className="absolute -top-16 left-0 w-full h-full flex items-center justify-center">
                    { cloneElement(svg, { className: "size-44 sm:size-52 select-none group-hover:scale-110 group-active:scale-95 transition-all m-auto" })}
                </div>
            </div>
            <div className="h-1/2 flex items-center justify-center">
                <p className=" text-gray-900 select-none dark:text-white text-xl sm:text-3xl font-bold">{name}</p>
            </div>
        </a>
    );
}

export default CardCategory;