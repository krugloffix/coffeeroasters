import React from "react";
import Intro from "../components/home/Intro";
import Collection from "../components/home/Collection";
import Choose from "../components/home/Choose";
import Work from "../components/home/Work";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="visually-hidden"> CoffeeRoasters Home Page</h1>
      <Intro />
      <Collection />
      <Choose />
      <Work />
    </div>
  );
};

export default Home;
