import React from "react";

import imgDesktop from "../../assets/about/commitment--desktop.png";

const Commitment: React.FC = () => {
  return (
    <div className="commitment">
      <div className="commitment__container">
        <img
          src={imgDesktop}
          alt="Man makes coffee-art"
          className="commitment__img"
        />
        <div className="commitment__inner">
          <h2 className="commitment__title">Our commitment</h2>
          <p className="commitment__text">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
