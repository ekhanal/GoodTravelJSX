import HeroImage from "../../assets/images/heroimage.jpg";
import {  useState } from "react";
import { RiHeart2Line } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { SiDreamstime } from "react-icons/si";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { GiThreeFriends } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { SiAnytype } from "react-icons/si";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [selectedButton, setSelectedButton] = useState("Travels");

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
        className="relative bg-cover bg-center min-h-[40vh] sm:min-h-screen  "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="flex flex-col items-center h-full md:justify-center absolute w-full  bg-opacity-50 ">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 border-yellow-500 pb-6 px-4 text-center pt-4 ">
            Find your Holiday
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Travels", "Ticketing", "Holidays", "Visa"].map((item, index) => {
              return (
                <button
                  key={index}
                  className={` text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 rounded focus:outline-none ${
                    selectedButton == item ? "text-yellow-500" : "text-white"
                  } `}
                  onClick={() => {
                    setSelectedButton(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
            <div className="flex flex-row justify-center gap-6 mt-8 ">
              {data[selectedButton]?.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col items-center text-white">
                    <div className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl  rounded-full border p-2">{item.icon}</div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg capitalize mt-2">{item.title}</p>
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
