import NumberPlusCount from "@/components/UI/NumberPlusCount";
import { useTranslations } from "next-intl";
import { FaPlus } from "react-icons/fa";
import {
  FiUsers,
  FiBriefcase,
  FiPackage,
  FiAward
} from "react-icons/fi";




function CountPlusBox() {
  const CountPlusNumberT = useTranslations("CountPlusNumber")
  const stats = [
    {
      number: 50,
      title: CountPlusNumberT("TitleCompanies"),
      description: CountPlusNumberT("DisCompanies"),
      icon: FiBriefcase,
    },
    {
      number: 1200,
       title: CountPlusNumberT("TitleClient"),
      description: CountPlusNumberT("DisClient"),
      icon: FiUsers,
    },
    {
      number: 300,
       title: CountPlusNumberT("TitleProduct"),
      description: CountPlusNumberT("DisProduct"),
      icon: FiPackage,
    },
    {
      number: 15,
       title: CountPlusNumberT("TitleYear"),
      description: CountPlusNumberT("DisYear"),
      icon: FiAward,
    },
  ];


  return (
    <section className="w-full py-16">
      <div className="mx-auto flex flex-wrap justify-center items-center  gap-12 px-12 ">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-slate-200/70
                bg-white
                p-7
                size-64
                shadow-sm
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl hover:shadow-blue-500/10
                  flex flex-col items-center justify-center
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-blue-900
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -right-10 -top-10
                  h-32 w-32 rounded-full
                  bg-blue-500/10
                  blur-3xl
                  transition-all duration-500
                  group-hover:bg-blue-500/20
                "
              />

              {/* Icon */}
              <div
                className="
                  relative mb-6
                  flex items-center justify-center
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:bg-blue-600
                  group-hover:text-white
                    size-14
                  dark:bg-blue-500/10
                  dark:text-blue-400
                  dark:group-hover:bg-blue-600
                  dark:group-hover:text-white
                "
              >
                <Icon size={27} strokeWidth={1.8} />
              </div>


              {/* Number */}
              <div
                className="
                  relative
                  flex items-center gap-2
                  text-4xl font-black tracking-tight
                  text-slate-900

                  dark:text-white
                "
              >
                {/* <span className="text-2xl -translate-y-1 text-blue-600 dark:text-blue-400">
                  <FaPlus />
                </span> */}

                <NumberPlusCount
                  number={item.number}
                />


              </div>

              {/* Title */}
              <h3
                className="
                  relative mt-3
                  text-lg font-bold
                  text-slate-800
                  dark:text-slate-100
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative mt-2
                  text-sm leading-6
                  text-slate-500
                  text-center
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>

              {/* Bottom line */}
              <div
                className="
                  absolute bottom-0 right-0
                  h-1 w-0
                  bg-blue-600
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CountPlusBox;