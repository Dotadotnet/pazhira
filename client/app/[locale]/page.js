import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/shadcn/sheet"
import { Button } from "@/components/UI/shadcn/button";
import SliderProduct from "@/components/banners/SliderProduct";
export default function Home() {
  return (
    <>
       <SliderProduct />
    </>
  );
}
