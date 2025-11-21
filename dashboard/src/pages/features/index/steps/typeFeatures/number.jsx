import { useState } from "react";

function number({ value }) {
    let resultValue = value ? typeof value == "object" ? value : JSON.parse(value) : { nameEn: "", nameFa: "", min: 0, max: 0 }
    const [max, setMax] = useState(resultValue.max);
    const [min, setMin] = useState(resultValue.min);
    const [nameFa, setNameFa] = useState(resultValue.nameFa);
    const [nameEn, setNameEn] = useState(resultValue.nameEn);

    localStorage.setItem("inputData", JSON.stringify({ nameFa: nameFa, nameEn: nameEn, min: min, max: max }))

    return (
        <>
            <div className="grid gap-3 grid-cols-2 mt-3">
                <div >
                    <label htmlFor="min">
                        <span className="mr-3">
                            حداقل :
                        </span>
                        <div className="flex justify-center items-center">
                            <input onChange={(event) => {
                                let value = event.target.value
                                setMin(parseInt(value))
                            }} value={min} className="mt-3" type="number" placeholder="000" id="min" />
                        </div>
                    </label> 
                </div>
                <div >
                    <label htmlFor="max">
                        <span className="mr-3">
                            حداکثر :
                        </span>
                        <div className="flex justify-center items-center">
                            <input
                                value={max}
                                onChange={(event) => {
                                    let value = event.target.value
                                    setMax(parseInt(value))
                                }}
                                className="mt-3" type="number" placeholder="000" id="max" />
                        </div>
                    </label>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-9">
                <div className="mt-4 w-full">
                    <label htmlFor="nameFa" className="w-full mr-3  h-fit">
                        نام واحد ( فارسی ) :
                        <input
                            onChange={(event) => {
                                setNameFa(event.target.value)
                            }}
                            autoComplete={"off"}
                            id="nameFa"
                            placeholder="نام را وارد کنید"
                            className="w-full mt-3 rounded-lg"
                            value={nameFa} />
                    </label>
                </div>
                <div className=" w-full mb-3 mt-3">
                    <label htmlFor="nameEn" className="w-full mr-3  h-fit">
                        شناسه واحد ( انگلیسی ) :
                        <input
                            autoComplete={"off"}
                            onChange={(event) => {
                                setNameEn(event.target.value)
                            }}
                            id="nameEn"
                            placeholder="شناسه را وارد کنید"
                            className="w-full mt-3 rounded-lg"
                            value={nameEn} />
                    </label>
                </div>
            </div>

        </>
    );
}

export default number;