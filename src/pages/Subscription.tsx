import React from "react";

import Hero from "../components/Hero";
import Work from "../components/home/Work";
import Options from "../components/subscription/Options";

const Subscription: React.FC = () => {
  return (
    <div className="subscription">
      <h1 className="visually-hidden"> CoffeeRoasters Subscription</h1>
      <Hero
        title="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door."
      />
      <Work />
      <Options />
    </div>
  );
};

export default Subscription;
