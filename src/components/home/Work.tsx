import React from "react";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
  const work = [
    {
      id: 0,
      name: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      id: 1,
      name: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      id: 2,
      name: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];

  return (
    <div className="work">
      <div className="container work__container">
        <h2 className="work__title">How it works</h2>
        <div className="work__inner">
          <ul className="work__list">
            {work.map((obj) => (
              <li key={obj.id} className="work__item">
                <span className="work__number">{`0${obj.id + 1}`}</span>
                <h3 className="work__name">{obj.name}</h3>
                <p className="work__description">{obj.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Link to={"/subscription"} className="main__btn work__btn">
          Create your plan
        </Link>
      </div>
    </div>
  );
};

export default Work;
