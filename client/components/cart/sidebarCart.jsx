"use client"
import { useHash } from "@/utilities/hashContext"
import { useEffect, useState } from "react"
import CartButtonNavbar from "./button"
import Sidebar from '@/components/UI/Sidebar';
import { useTranslations } from "next-intl";
export default function Page({ className = "" }) {
    const { hash, setHash } = useHash()
    const [open, setOpen] = useState(hash == "cart" ? true : false)
    const navbar = useTranslations('Navbar');


    useEffect(() => {
        if (hash !== "cart") {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [hash])

    return (
        <>
            <CartButtonNavbar className={"p-2 text-2xl" + " " + className} onclick={() => {
                if (hash == "cart") {
                    setHash("")
                } else {
                    setHash("cart")
                }
            }} />
            <Sidebar zIndex="-5" isOpen={open} setOpen={setOpen} >
                <div className="p-5 text-2xl" >{navbar("BagCart")}</div>
            </Sidebar>

        </>
    )
}

