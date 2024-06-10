import { useState } from "react";
import Bangkok from "../../assets/images/Bangkok.jpg";
import Tripinfo from "../../components/home/tripinfo";
import Colombo from "../../assets/images/colombo.jpg";
import GOA from "../../assets/images/GOA.webp";
import Istanabul from "../../assets/images/istanabul.webp";
import Jazan from "../../assets/images/jazan.webp";
import Khozikode from "../../assets/images/khozikode.jpg";
import Phuket from "../../assets/images/Phuket.jpg";
import Sydney from "../../assets/images/sydney.webp";
import Bali from "../../assets/images/Bali.jpg";
import Jaipur from "../../assets/images/Jaipur.jpg";
import Varanasi from "../../assets/images/Varanasi.jpg";
import NorthMale from "../../assets/images/NorthMale.jpg";
import Seoul from "../../assets/images/Seoul.jpg";
import Hanoi from "../../assets/images/Hanoi.jpg";
import Abu from "../../assets/images/Abu.webp";
import Kuala from "../../assets/images/Kuala.jpg";
import Singapore from "../../assets/images/Singapore.jpg";
import Dubai from "../../assets/images/Dubai.jpg";
import Hongkong from "../../assets/images/Hongkong.jpg";
import Coachin from "../../assets/images/Coachin.jpg";
import Delhi from "../../assets/images/Delhi.jpg";
import Hyderabad from "../../assets/images/Hyderabad.webp";
import Muscat from "../../assets/images/Muscat.jpg";
const Data = {
  Dubai: [
    {
      image: Bangkok,
      city: "Bangkok",
      country: "Thailand",
      price: "US $10",
    },
    {
      image: Colombo,
      city: "Colombo",
      country: "sri Lanka",
      price: "US $429",
    },
    {
      image: GOA,
      city: "Goa",
      country: "India",
      price: "US $226",
    },
    {
      image: Istanabul,
      city: " Istanabul",
      country: "Turkey",
      price: "US $556",
    },
    {
      image: Khozikode,
      city: "Kozhikode",
      country: "India",
      price: "US $361",
    },
    {
      image: Phuket,
      city: "Phuket",
      country: "Thailand",
      price: "US $354",
    },
    {
      image: Jazan,
      city: " Jazan",
      country: "Saudi Arabia",
      price: "US $449",
    },
    {
      image: Sydney,
      city: "Sydney",
      country: "Australia",
      price: "US $697",
    },
  ],

  Thailand: [
    {
      image: Bangkok,
      city: "Bangkok",
      country: "Thailand",
      price: "US $10",
    },
    {
      image: GOA,
      city: "Goa",
      country: "India",
      price: "US $226",
    },
    {
      image: Jaipur,
      city: "Jaipur",
      country: "India",
      price: "US $246",
    },
    {
      image: Varanasi,
      city: "Varanasi",
      country: "India",
      price: "US $310",
    },
    {
      image: NorthMale,
      city: "North Male Atoll",
      country: "Maldives",
      price: "US $354",
    },
    {
      image: Seoul,
      city: "Seoul",
      country: "South Korea",
      price: "US $437",
    },
    {
      image: Hanoi,
      city: "Hanoi",
      country: "Vietnam",
      price: "US $441",
    },
    {
      image: Bali,
      city: "Bali",
      country: "Indonesia",
      price: "US $449",
    },
  ],
  "Sri-Lanka": [
    {
      image: Bangkok,
      city: "Bangkok",
      country: "Thailand",
      price: "US $10",
    },
    {
      image: Abu,
      city: "Abu Dhabi",
      country: "United Arab Emirates",
      price: "US $182",
    },
    {
      image: Kuala,
      city: "Kuala Lumpur",
      country: "Malaysia",
      price: "US $304",
    },
    {
      image: Singapore,
      city: "Singapore",
      country: "Round-trip from",
      price: "US $353",
    },
    {
      image: NorthMale,
      city: "North Male Atoll",
      country: "Maldives",
      price: "US $354",
    },
    {
      image: Dubai,
      city: "Dubai",
      country: "United Arab Emirates",
      price: "US $366",
    },
    {
      image: Seoul,
      city: "Seoul",
      country: "South korea",
      price: "US $437",
    },
    {
      image: Hongkong,
      city: "Hong Kong",
      country: "Hong Kong (SAR, China)",
      price: "US $445",
    },
  ],
  Indonesia: [
    {
      image: GOA,
      city: "Goa",
      country: "India",
      price: "US $226",
    },
    {
      image: Coachin,
      city: "Cochin",
      country: "India",
      price: "US $280",
    },
    {
      image: Phuket,
      city: "Phuket",
      country: "Thailand",
      price: "US $354",
    },
    {
      image: Colombo,
      city: "Colombo",
      country: "sri Lanka",
      price: "US $429",
    },
    {
      image: Hanoi,
      city: "Hanoi",
      country: "Vietnam",
      price: "US $441",
    },
    {
      image: Bali,
      city: "Bali",
      country: "Indonesia",
      price: "US $449",
    },
    {
      image: Seoul,
      city: "Seoul",
      country: "South korea",
      price: "US $437",
    },
    {
      image: Hongkong,
      city: "Hong Kong",
      country: "Hong Kong (SAR, China)",
      price: "US $445",
    },
  ],
  Singapore: [
    {
      image: Bangkok,
      city: "Bangkok",
      country: "Thailand",
      price: "US $10",
    },
    {
      image: Delhi,
      city: "New Delhi",
      country: "India",
      price: "US $131",
    },
    {
      image: GOA,
      city: "Goa",
      country: "India",
      price: "US $226",
    },
    {
      image: Colombo,
      city: "Colombo",
      country: "sri Lanka",
      price: "US $429",
    },
    {
      image: Hanoi,
      city: "Hanoi",
      country: "Vietnam",
      price: "US $441",
    },
    {
      image: Bali,
      city: "Bali",
      country: "Indonesia",
      price: "US $449",
    },
    {
      image: Dubai,
      city: "Dubai",
      country: "United Arab Emirates",
      price: "US $366",
    },
    {
      image: Istanabul,
      city: " Istanabul",
      country: "Turkey",
      price: "US $556",
    },
  ],
  Malyasia: [
    {
      image: Bangkok,
      city: "Bangkok",
      country: "Thailand",
      price: "US $10",
    },
    {
      image: Delhi,
      city: "New Delhi",
      country: "India",
      price: "US $131",
    },
    {
      image: Hyderabad,
      city: "Hyderabad",
      country: "India",
      price: "US $246",
    },
    {
      image: Kuala,
      city: "Kuala Lumpur",
      country: "Malaysia",
      price: "US $304",
    },
    {
      image: Colombo,
      city: "Colombo",
      country: "sri Lanka",
      price: "US $429",
    },
    {
      image: Muscat,
      city: "Muscat",
      country: "Oman",
      price: "US $383",
    },
    {
      image: Singapore,
      city: "Singapore",
      country: "Round-trip from",
      price: "US $353",
    },
    {
      image: Varanasi,
      city: "Varanasi",
      country: "India",
      price: "US $310",
    },
  ],
};
const Trip = () => {
  const [activeButton, setActiveButton] = useState("Beach");
  const buttonLabels = [
    "Dubai",
    "Thailand",
    "Sri-Lanka",
    "Indonesia",
    "Singapore",
    "Malyasia",
  ];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div className="container mx-auto py-8 px-5 md:px-32">
      <h2 className="text-2xl font-bold">
        International Tour with Good Travel and Tours
      </h2>
      <div className="flex flex-row flex-wrap gap-6 mb-6 mt-6 items-center md:justify-left justify-center">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className={`p-3 md:px-4 md:py-2 rounded-full mr-2 min-w-36 ${
              activeButton === label
                ? "bg-green-50 text-green-300"
                : "bg-gray-200"
            }`}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data[activeButton]?.map((trip, index) => (
          <Tripinfo
            key={index}
            city={trip.city}
            country={trip.country}
            price={trip.price}
            image={trip.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Trip;
