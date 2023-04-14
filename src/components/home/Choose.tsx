import React from "react";

import quality from "../../assets/home/quality.svg";
import benefits from "../../assets/home/benefits.svg";
import shipping from "../../assets/home/shipping.svg";

const Choose: React.FC = () => {
  const advantages = [
    {
      id: 0,
      icon: quality,
      name: "Best quality",
      description:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      id: 1,
      icon: benefits,
      name: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      id: 2,
      icon: shipping,
      name: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];

  return (
    <div className="choose">
      <div className="container choose__container">
        <h2 className="choose__title">Why choose us?</h2>
        <p className="choose__text">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="choose__inner">
          <ul className="choose__list">
            {advantages.map((obj) => (
              <li key={obj.id} className="choose__item">
                <img
                  src={obj.icon}
                  alt=""
                  aria-hidden="true"
                  className="choose__img"
                />
                <h3 className="choose__name">{obj.name}</h3>
                <p className="choose__description">{obj.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Choose;
