import React from "react";

import granEspresso from "../../assets/home/gran-espresso.png";
import planalto from "../../assets/home/planalto.png";
import piccollo from "../../assets/home/piccollo.png";
import danche from "../../assets/home/danche.png";

const Collection: React.FC = () => {
  const collection = [
    {
      id: 0,
      name: "Gran Espresso",
      description:
        "Light and flavorful blend with cocoa and black pepper for an intense experience.",
      img: granEspresso,
    },
    {
      id: 1,
      name: "Planalto",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
      img: planalto,
    },
    {
      id: 2,
      name: "Piccollo",
      description:
        "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
      img: piccollo,
    },
    {
      id: 3,
      name: "Danche",
      description:
        "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
      img: danche,
    },
  ];

  return (
    <div className="collection">
      <div className="container collection__container">
        <h2 className="collection__title">our collection</h2>
        <ul className="collection__list">
          {collection.map((obj) => (
            <li key={obj.id} className="collection__item">
              <img src={obj.img} alt={obj.name} className="collection__img" />
              <h3 className="collection__name">{obj.name}</h3>
              <p className="collection__description">{obj.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collection;
