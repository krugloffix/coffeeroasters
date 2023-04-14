import React from "react";

import uk from "../../assets/about/uk.svg";
import canada from "../../assets/about/canada.svg";
import australia from "../../assets/about/australia.svg";

const Headquarters: React.FC = () => {
  const headquarters = [
    {
      id: 0,
      img: uk,
      country: "United Kingdom",
      street: "68  Asfordby Rd",
      city: "Alcaston",
      postcode: "SY6 1YA",
      phone: "+44 1241 918425",
    },
    {
      id: 1,
      img: canada,
      country: "Canada",
      street: "1528  Eglinton Avenue",
      city: "Toronto",
      postcode: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
    {
      id: 2,
      img: australia,
      country: "Australia",
      street: "36 Swanston Street",
      city: "Kewell",
      postcode: "Victoria",
      phone: "+61 4 9928 3629",
    },
  ];

  return (
    <div className="headquarters">
      <div className="headquarters__container">
        <h2 className="headquarters__title">Our headquarters</h2>
        <ul className="headquarters__list">
          {headquarters.map((obj) => (
            <li key={obj.id} className="headquarters__item">
              <img
                src={obj.img}
                alt={`${obj.country} outline`}
                className="headquarters__img"
              />
              <h3 className="headquarters__name">{obj.country}</h3>
              <p className="headquarters__text">{obj.street}</p>
              <p className="headquarters__text">{obj.city}</p>
              <p className="headquarters__text">{obj.postcode}</p>
              <p className="headquarters__text">{obj.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Headquarters;
