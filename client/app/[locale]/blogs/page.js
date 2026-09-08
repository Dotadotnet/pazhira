import CardRaspy from "@/components/cards/CardRaspy";
import SeaEffect from "@/components/UI/SeaEffect";
import { color } from "motion";
import { useTranslations } from "next-intl";


function Blogs() {
    const BlogT = useTranslations('BlogPage');
    const Data = [
        {
            title: BlogT("CannedMushroomsTitle"),
            caption: BlogT("CannedMushroomsCaption"),
            backPhoto: "/photo/food_1.png",
            cannedPhoto: "/products/canned_mushrooms.png",
            color: "#3a7023"
        },
        {
            title: BlogT("CannedLentilsTitle"),
            caption: BlogT("CannedLentilsCaption"),
            backPhoto: "/photo/food_3.png",
            cannedPhoto: "/products/canned_lentils.png",
            color: "#d06f2e"
        },
        {
            title: BlogT("CannedChickpeasTitle"),
            caption: BlogT("CannedChickpeasCaption"),
            backPhoto: "/photo/food_2.png",
            cannedPhoto: "/products/canned_chickpeas.png",
            color: "#f4b219"
        }
    ]
    return (
        <>
            <br /><br /><br /><br />
            <div className="flex overflow-hidden  justify-center py-16 px-5 lg:gap-32 gap-20 w-full flex-wrap items-center" >
                {
                    Data.map((item, index) => {
                        return (
                            <CardRaspy
                                title={item.title}
                                caption={item.caption}
                                backPhoto={item.backPhoto}
                                cannedPhoto={item.cannedPhoto}
                                link={"/"}
                                color={item.color}
                            />
                        )
                    })
                }
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Blogs;