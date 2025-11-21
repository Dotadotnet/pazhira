export default function optionType({ value, info }) { 
     
    return (
        <div  className="flex flex-wrap items-center justify-center text-2xl">
            <span className="w-full text-center dark:text-white text-gray-950 ml-24">
            وضعیت {info.name} :
            </span>
            <div className="flex w-full justify-center mt-8 mb-12">
                <select
                    name={info.field}
                    className="  ltr text-left  w-60 cursor-pointer"
                > 
                
                    {info.data.map((item) => (
                        <option className="rounded-2xl" selected={value == item ? true : false} key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
