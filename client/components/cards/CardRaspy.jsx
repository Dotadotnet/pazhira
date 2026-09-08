import Image from "next/image";
import SeaEffect from "../UI/SeaEffect";
import { Link } from "@/i18n/navigation";

function CardRaspy({ color, link, cannedPhoto, backPhoto, title, caption }) {
    return (
        <>
            <Link className="relative w-64 h-76 group" href={link}>
                <div style={{ backgroundColor: color }} className={"w-64 h-76 rounded-4xl shadow-xl shadow-gray-600" + " "} >
                    <div className="h-1/3 relative w-full">
                        <div className="flex justify-center size-full flex-col p-4 gap-3" >
                            <p className="text-sm font-bold sm:text-base text-white" >{title}</p>
                            <p className="text-xs sm:text-sm text-white opacity-85" >{caption}</p>
                        </div>
                        <div className={"w-full absolute -bottom-7 rotate-180"}>
                            <SeaEffect color={color} />
                        </div>
                    </div>
                    <div className="h-2/3 rounded-b-4xl overflow-hidden w-full">
                        <Image width={400} height={400} className="size-full object-cover" src={backPhoto} />
                    </div>
                </div>
                <Image width={300} height={200} className="w-44 duration-[0.6s] group-hover:-left-9 group-hover:-bottom-9 group-hover:scale-110 transition-all  group-hover:-rotate-[25deg]  absolute -left-12 -bottom-12 -rotate-[30deg] object-cover" src={cannedPhoto} />
            </Link>
        </>
    );
}

export default CardRaspy;