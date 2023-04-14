import React from "react";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__overlay"></div>
        <div className="intro__inner">
          <h2 className="intro__title">Great coffee made simple.</h2>
          <p className="intro__text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to={"/subscription"} className="main__btn intro__btn">
            Create your plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
