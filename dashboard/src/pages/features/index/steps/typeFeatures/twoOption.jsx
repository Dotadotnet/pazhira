
import { useState } from "react";

function TwoOption({ value }) {
    
    let resultValue = [ { nameFa: "", nameEn: "" }, { nameFa: "", nameEn: "" } ] ;

    
    try {
        let data = JSON.parse(value) ;        
        if(data[0].nameEn || data[0].nameEn == '' ){
            resultValue = data
        }
    } catch (error) {
        
    }  

    const [nameFaOne, setNameFaOne] = useState(resultValue[0]?.nameFa);
    const [nameFaTwo, setNameFaTwo] = useState(resultValue[1]?.nameFa);
    const [nameEnOne, setNameEnOne] = useState(resultValue[0]?.nameEn);
    const [nameEnTwo, setNameEnTwo] = useState(resultValue[1]?.nameEn);

    localStorage.setItem("inputData", JSON.stringify([{ nameEn : nameEnOne , nameFa : nameFaOne  }, { nameEn : nameEnTwo , nameFa : nameFaTwo  } ]) )
    
    
    return (
        <>
            <input type="text" className="hidden data-input" />
            <div className="grid gap-3 grid-cols-2 mt-3">
                <div>
                    <label htmlFor="nameFaOne">
                        <span className="mr-5">
                            نام ( فارسی ) :
                        </span>
                        <div className="flex justify-center items-center">
                            <input onChange={(event) => {
                                let value = event.target.value
                                setNameFaOne(value)
                            }} value={nameFaOne} className="mt-3" type="text" placeholder="نام را وارد کنید" id="nameFaOne" />
                        </div>
                    </label>
                </div>
                <div >
                    <label htmlFor="nameFaTwo">
                        <span className="mr-5">
                            نام ( فارسی ) :
                        </span>
                        <div className="flex justify-center items-center">
                            <input
                                value={nameFaTwo}
                                onChange={(event) => {
                                    let value = event.target.value
                                    setNameFaTwo(value)
                                }}
                                className="mt-3" type="text" placeholder="نام را وارد کنید" id="nameFaTwo" />
                        </div>
                    </label>
                </div>

                <div>
                    <label htmlFor="nameEnOne">
                        <span className="mr-5">
                            شناسه ( انگلیسی ) :
                        </span>
                        <div className="flex justify-center items-center">
                            <input 
                            onChange={(event) => {
                                let value = event.target.value
                                setNameEnOne(value)
                            }}
                             value={nameEnOne} 
                             className="mt-3" 
                             type="text" 
                             placeholder="شناسه را وارد کنید" 
                             id="nameEnOne" />
                        </div>
                    </label>
                </div>
                <div >
                    <label htmlFor="nameEnTwo">
                        <span className="mr-5">
                            شناسه ( انگلیسی ) :
                        </span>
                        <div className="flex justify-center items-center">
                            <input
                                onChange={(event) => {
                                    let value = event.target.value
                                    setNameEnTwo(value)
                                }}
                                value={nameEnTwo}
                                className="mt-3" type="text" placeholder="شناسه را وارد کنید" id="nameEnTwo" />
                        </div>
                    </label>
                </div>
            </div>

        </>
    );
}

export default TwoOption;