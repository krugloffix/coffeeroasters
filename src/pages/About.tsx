import React from "react";
import Commitment from "../components/about/Commitment";
import Headquarters from "../components/about/Headquarters";
import Hero from "../components/Hero";
import Quality from "../components/about/Quality";

const About: React.FC = () => {
  return (
    <div className="about">
      <h1 className="visually-hidden">About CoffeeRoasters</h1>
      <Hero
        title="About us"
        text="Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since
        been dedicated to bring the perfect cup - from bean to brew - in every
        shipment."
      />
      <Commitment />
      <Quality />
      <Headquarters />
    </div>
  );
};

export default About;
