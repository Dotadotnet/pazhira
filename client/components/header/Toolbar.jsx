import ChatCustomEvent from "../Chat/chatCustomEvent";
import ThemeToggle from "../Theme/swich";
import BottonUser from "./user";
import SidebarCart from "../cart/sidebarCart";
import PhoneNumberNavbarLinked from "./items/phoneNumberNavbarLinked";


function Toolbar() {
  return (
    <div className="fixed flex  sm:hidden z-50 justify-center p-5 sm:p-9 items-center left-0 right-0 bottom-0">
      <div className=" w-full sm:w-1/2 relative    dark:bg-gray-100/10 bg-black/5      shadow-gray-600  dark:shadow-gray-100 p-2 rounded-full ">
        <div className="size-full  rounded-4xl backdrop-blur-md    absolute top-0 right-0"></div>
        <div className=" size-full relative " >
          <div className="size-full " >
            <div>
              <div className="w-full  flex ltr:flex-row-reverse justify-between items-center px-2 ">
                <div className="ltr:flex-row-reverse justify-center flex items-center  gap-6" >
                  <ThemeToggle className={"p-2 text-2xl"} />
                  <PhoneNumberNavbarLinked  />
                </div>
                <div className="ltr:flex-row-reverse justify-center flex items-center  gap-6 ">
                  <BottonUser  />
                  <SidebarCart  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex h-12 overflow-hidden pt-12 absolute justify-center items-center -top-14  " >
            <div className="size-20 relative flex  justify-center pt-2 rounded-full backdrop-blur-md dark:bg-gray-100/10 bg-black/5 " >
            </div>
          </div>

          <div className="w-full  flex   absolute justify-center items-center -top-10  " >
            <div className="relative size-15 rounded-full bg-primary">
              <div
                className="
      absolute inset-0
       rounded-full 
      border-3 border-primary
      animate-[ripple_1s_ease-out_infinite]
    "
              />
              <div className="relative size-full z-10">
                <ChatCustomEvent className="size-10  text-white" />
              </div>
            </div>
          </div>

        </div>


      </div>



    </div>
  );
}

export default Toolbar;
