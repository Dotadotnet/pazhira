import { lazy, Suspense, useEffect, useState } from "react";

const modules = import.meta.glob("./typeFeatures/*.jsx");

function InputTypeFeature({ type , preValue }) {    
    let path = './typeFeatures/' + (type ? type : "none") + ".jsx";

    let prevDataInput = localStorage.getItem("inputData") ;

    const loader = modules[path] || modules["./typeFeatures/error.jsx"];
    var MyDynamicComponent = lazy(loader)
    return (
        <>
        <Suspense>
            <MyDynamicComponent value={prevDataInput} />
        </Suspense>
        </>
    );
}

export default InputTypeFeature;