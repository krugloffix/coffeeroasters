import React from "react";

import imgDesktop from "../../assets/about/quality--desktop.png";

const Quality: React.FC = () => {
  return (
    <div className="quality">
      <div className="quality__container">
        <div className="quality__inner">
          <h2 className="quality__title">Uncompromising quality</h2>
          <p className="quality__text">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <img
          src={imgDesktop}
          alt="Cup of coffee with heart-art"
          className="quality__img"
        />
      </div>
    </div>
  );
};

export default Quality;
