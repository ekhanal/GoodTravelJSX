import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Tripinfo = ({ image, city, country, price }) => {
    const [tripData, setTripData] = useState({
        image : "",
        city : "",
        country : "",
        price : "",
    });

    useEffect(()=>{
        setTripData({
            image : image,
            city : city,
            country : country,
            price : price,
        })
    },[image, city, country, price])
    console.log({tripData});
  return (
    <>
      {tripData &&(<div className="rounded-overflow-hidden shadow-lg">
        {tripData.image &&(<img
          className="w-full h-48 object-cover"
          src={tripData.image}
          alt="Bangkok-image"
        />)}
        <div className="px-6 py-4">
          <div className="text-xl font-bold mb-2">{tripData.city}</div>
          <p className="text-gray-700 text-base">{tripData.country}</p>
          {tripData.price &&(<p className="text-gray-700 text-base">Round trip from {tripData.price}</p>)}
        </div>
      </div>)}
    </>
  );
  };
    Tripinfo.propTypes={
      image : PropTypes.any,
      city : PropTypes.string,
      country : PropTypes.string,
      price : PropTypes.string,
    }

export default Tripinfo;
