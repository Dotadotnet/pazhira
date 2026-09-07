"use client"
import Link from 'next/link';
import { HiOutlineLogin } from 'react-icons/hi';
import {useTranslations} from 'next-intl';


function BottonUser({className = ""}) {
      const navbar = useTranslations('Navbar');
    return (
        <Link className='inline-flex items-center' href={"/login"}>
                <div className={" inline-flex ltr:flex-row-reverse  text-sm items-center rounded-full hover:shadow-sm shadow-gray-500  p-2 md:py-1.5 md:px-3  transition-all  dark:bg-white/10 bg-black/10  " + className}>
                    <HiOutlineLogin className='text-2xl' />
                    <p className="mx-2 hidden md:flex text-sm">
                        { navbar("LoginAndRegister") }
                    </p>
                </div>
                {/* <div className="md:hidden rtl:ml-3  rtl:mr-1 ltr:mr-3 ltr:ml-1">
                    <HiOutlineLogin className='ltr:rotate-180' style={{ fontSize: "1.6rem" }} />
                </div> */}
        </Link>
    );
}

export default BottonUser;