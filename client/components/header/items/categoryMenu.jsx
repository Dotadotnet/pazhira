import Sidebar from "@/components/UI/Sidebar";
import { useHash } from "@/utilities/hashContext";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function capitalizeFirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function CategoryMenu({ className = '' }) {
    const { hash, setHash } = useHash()
    const CategoryT = useTranslations("Category");
    const ProductT = useTranslations("Product");
    const [open, setOpen] = useState(hash == "nav" ? true : false)
    const [category, setCategory] = useState(null)
    const navbar = useTranslations('Navbar');


    const categories = {
        pickles: [
            { name: ProductT("PickledOlives"), image: "/probybg/1.png" },
        ],
        jams: [
            { name: ProductT("StrawberryJam"), image: "/probybg/2.png" },
        ],
        canned: [
            { name: ProductT("CannedChickpeas"), image: "/probybg/3.png" },
            { name: ProductT("SweetCorn"), image: "/probybg/4.png" }

        ]
    }


    useEffect(() => {
        let name = hash.replace("category_", "")
        if (hash.startsWith("category_") && categories[name]) {
            setCategory(name)
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [hash])


    return (<>
        <Sidebar zIndex="40" isOpen={open} setOpen={setOpen} >
            <div className="p-5 mt-3 font-bold text-3xl pr-10" >
                {CategoryT(capitalizeFirst(category))}
            </div>
            <div className="px-2 gap-4 flex flex-col">
                {categories[category]?.map((item, index) => {
                    return (
                        <div>
                            <div key={index} className="p-3 bg-white flex rounded-4xl  dark:bg-gray-900 text-lg">
                                <div className="w-28 h-28 rounded-4xl overflow-hidden">
                                    <Image
                                        className="size-full object-cover"
                                        src={item.image}
                                        width={200}
                                        height={200}
                                    />

                                </div>
                                <div className="flex text-xl w-[calc(100%-112px)] justify-center font-bold items-center">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className="flex flex-col mt-12 px-6 " >
                {itemsNav.map((item, index) => {
                    return (
                        <motion.div
                            whileHover={{ translateX: "-30px", scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={item.link} className="group" >
                                <div className="py-2.5 flex gap-4 rtl:pr-8 ltr:pl-8 items-center rounded-full transition-all " >
                                    {cloneElement(item.icon, { className: "text-xl scale-110" })}
                                    <span style={{ fontWeight: 800 }} className="ltr:ml-1 font-bolder  flex items-center  rtl:mr-1 text-nowrap ">{navbar(item.name)}</span>
                                </div>
                            </Link>
                        </motion.div>
                    )
                })}
            </div> */}
        </Sidebar>

    </>);
}

export default CategoryMenu;