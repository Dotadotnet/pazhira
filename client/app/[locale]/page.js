import EventSlider from "@/components/banners/EventProduct";
import CategorySlider from "@/components/banners/CategorySlider";
import CountPlusBox from "@/components/UI/CountPlusBox";

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-wrap  p-8 mt-0 sm:mt-8 overflow-x-hidden" >
        <div className=" flex justify-center items-center w-full md:w-2/3 " >
          <div className=" w-full h-68 rounded-4xl overflow-hidden sm:h-96 " >
            <EventSlider banners={[
              "/images/banner/b1.png",
              "/images/banner/b2.jpg",
              "/images/banner/b3.jpg"
            ]} />
          </div>
          
        </div>
        <div className="w-full md:w-1/3  flex items-center md:mt-0 mt-12 justify-center" >
          <CategorySlider />
        </div>
      </div>
        
        <CountPlusBox />
    
    </>
  );
}
