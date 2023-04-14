import React from "react";

type Props = { title: string; text: string };

const Hero = ({ title, text }: Props) => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__overlay"></div>
        <div className="hero__inner">
          <h2 className="hero__title">{title}</h2>
          <p className="hero__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
