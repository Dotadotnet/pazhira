import ControlPanel from "../ControlPanel";
import { lazy, Suspense, useEffect, useState } from "react";
const modules = import.meta.glob("../../components/icons/*.jsx");

function PageIconShow({ type, preValue }) {

    const icons = [];
    const ignoreIcons = ["Heart","Screen"]
    const paths = Object.keys(modules);

    paths.forEach(path => {
        icons.push({ name: path.replaceAll(["../../components/icons/"], [""]).replaceAll([".jsx"], [""]), icon: modules[path] })
    })


    // var MyDynamicComponent = lazy(loader)

    return (
        <>
            {/* <Suspense>
            <MyDynamicComponent value={prevDataInput} />
        </Suspense> */}

            <ControlPanel>
                <div className="flex gap-4 flex-wrap justify-between items-center" >
                    {
                        icons.map(icon => {
                            var IconComponent = lazy(icon.icon)
                            let name = icon.name;
                            if (!ignoreIcons.includes(name)) {                                
                                return (
                                    <>
                                    <div className="flex flex-col justify-center items-center">
                                        <Suspense>
                                            <IconComponent className="size-16 dark:text-slate-700" />
                                        </Suspense>
                                        <span className="mt-7">
                                        { name }
                                        </span>
                                    </div>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </ControlPanel >
        </>
    );

}

export default PageIconShow;