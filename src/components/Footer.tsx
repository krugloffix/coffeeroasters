import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-white.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer: React.FC = () => {
  const nav = [
    { id: 0, url: "", title: "Home" },
    { id: 1, url: "about", title: "About us" },
    { id: 2, url: "subscription", title: "Create your plan" },
  ];

  const socials = [
    { id: 0, url: "https://vk.com/", title: "Facebook", logo: facebook },
    { id: 1, url: "https://vk.com/", title: "Twitter", logo: twitter },
    { id: 2, url: "https://vk.com/", title: "Instagram", logo: instagram },
  ];

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to={""}>
            {" "}
            <img src={logo} alt="CoffeeRoasters logo" />
          </Link>
        </div>
        <ul className="footer__list">
          {nav.map((obj) => (
            <li key={obj.id} className="footer__item">
              <Link to={obj.url} className="footer__link">
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socials">
          {socials.map((obj) => (
            <li key={obj.id}>
              <Link to={obj.url} target="_blank">
                <span
                  className="footer__social"
                  style={{
                    maskImage: `url(${obj.logo})`,
                    WebkitMaskImage: `url(${obj.logo})`,
                  }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
