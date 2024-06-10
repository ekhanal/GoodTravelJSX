import HeroImage from "../../assets/images/heroimage.jpg";
import { useState } from "react";
import { RiHeart2Line } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { SiDreamstime } from "react-icons/si";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { GiThreeFriends } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { SiAnytype } from "react-icons/si";

const Hero = () => {
  const [selectedButton, setSelectedButton] = useState(false);
  const data = {
    Travels: [
      {
        title: "any",
        icon: <SiAnytype />,
      },
      {
        title: "romance",
        icon: <RiHeart2Line />,
      },
      {
        title: "beach",
        icon: <SiAnytype />,
      },
      {
        title: "adventure",
        icon: <MdOutlineFamilyRestroom />,
      },
    ],

    Ticketing: [
      {
        title: "any",
        icon: <SiAnytype />,
      },
      {
        title: "deals",
        icon: <RiMoneyDollarBoxLine />,
      },
      {
        title: "escape",
        icon: <RiMoneyDollarBoxLine />,
      },
      {
        title: "dreams",
        icon: <SiDreamstime />,
      },
    ],
    Holidays: [
      {
        title: "any",
        icon: <SiAnytype />,
      },
      {
        title: "Abu Dhabi",
        icon: <RiMoneyDollarBoxLine />,
      },
      {
        title: "Dubai",
        icon: <GiModernCity />,
      },
    ],
    Visa: [
      {
        title: "any",
        icon: <SiAnytype />,
      },
      {
        title: "solo",
        icon: <FaPerson />,
      },
      {
        title: "couple",
        icon: <RiMoneyDollarBoxLine />,
      },
      {
        title: "family",
        icon: <GiThreeFriends />,
      },
      {
        title: "friends",
        icon: <TbFriends />,
      },
    ],
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-[40vh] sm:min-h-screen "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="flex flex-col items-center h-full md:justify-center absolute w-full">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl border-b-2 border-yellow-500 pb-6 px-4 ">
            Find your Holiday
          </h1>
          <div className="flex  md:flex-row gap-6 mt-6">
            {["Travels", "Ticketing", "Holidays", "Visa"].map((item, index) => {
              return (
                <button
                  key={index}
                  className={` ${
                    selectedButton == item ? "text-yellow-500" : "text-white"
                  }text-base md:text-lg lg:text-xl  `}
                  onClick={() => {
                    setSelectedButton(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
            <div className="flex flex-row justify-center gap-4 mt-4 ">
              {data[selectedButton]?.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col items-center gap-2 text-white">
                    <p className=" text-xl md:text-2xl lg:text-3xl rounded-full border p-4">{item.icon}</p>
                    <p className="text-sm md:text-base lg:text-lg capitalize">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </>
  );
};

export default Hero;
