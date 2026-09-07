import Sidebar from "@/components/UI/Sidebar";
import { useHash } from "@/utilities/hashContext";
import { cloneElement, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { itemsNav } from "../items";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IoClose } from "react-icons/io5";

function ButtonMenuMobile({ className = '' }) {
    const { hash, setHash } = useHash()
    const [open, setOpen] = useState(hash == "nav" ? true : false)
    const navbar = useTranslations('Navbar');

    useEffect(() => {
        if (hash !== "nav") {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [hash])

    return (<>
        <button
            className={" rounded-full relative cursor-pointer hover:shadow-sm p-2  shadow-gray-500 dark:bg-white/10 bg-black/10 " + " " + className}
            onClick={() => {
                if (hash == "nav") {
                    setHash("")
                } else {
                    setHash("nav")
                }
            }}
        >
            {hash == 'nav' ?
                <IoClose className='text-2xl font-bold' />
                :
                <FiMenu className='text-2xl font-bold' />
            }
        </button>
        <Sidebar zIndex="-50" isOpen={open} setOpen={setOpen} >
            <div className="flex flex-col mt-12 px-6 " >
                {itemsNav.map((item, index) => {
                    return (
                        <motion.div>
                            <Link href={item.link} className="group" >
                                <div className="py-2.5 flex gap-4 rtl:pr-8 ltr:pl-8 items-center group-hover:bg-white dark:group-hover:bg-gray-500 rounded-full transition-all " >
                                    {cloneElement(item.icon, { className: "text-xl scale-110" })}
                                    <span style={{ fontWeight: 800 }} className="ltr:ml-1 font-bolder  flex items-center  rtl:mr-1 text-nowrap ">{navbar(item.name)}</span>
                                </div>
                            </Link>
                        </motion.div>
                    )
                })}
            </div>
        </Sidebar>

    </>);
}

export default ButtonMenuMobile;