import { div } from "motion/react-client";
import { SVGEffect } from "./svgEffect";



function EffectFotter() {
    return (
        <>
            <br />
            <br />
            <div className="bg-primary-300 z-30 relative h-36 dark:bg-primary-700" >
                <div className="absolute text-[rgb(243,244,245)] dark:text-[rgb(15,23,42)] z-10 -top-2 right-0 w-full flex justify-center items-center" >
                    <SVGEffect />
                </div>
                <div className="absolute top-0 right-0   w-full  flex justify-center items-center" >
                    <SVGEffect className="text-primary" />
                </div>
            </div>
        </>
    );
}

export default EffectFotter;