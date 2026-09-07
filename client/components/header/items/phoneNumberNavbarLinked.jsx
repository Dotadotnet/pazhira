import { a } from "motion/react-client";
import { FaPhoneFlip } from "react-icons/fa6";

function PhoneNumberNavbarLinked({className = ""}) {
    return (
        <a className="group" href="tel:+989128989020">
            <div className={"inline-flex rtl:flex-row  cursor-pointer   items-center rounded-full group-hover:shadow-sm shadow-gray-500   md:py-2 p-2 md:px-4  transition-all  dark:bg-white/10 bg-black/10" + " " + className }>
                <FaPhoneFlip  className="rtl:scale-75 size-6 ltr:-scale-75  ltr:-rotate-90" />
                <span className="ltr:ml-2 md:inline-block hidden rtl:mr-2">
                    09128989020
                </span>
            </div>
        </a>
    );
}

export default PhoneNumberNavbarLinked;