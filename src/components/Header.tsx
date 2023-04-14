import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { openModal } from "../redux/slices/loginModalSlice";
import { useAuth } from "../hooks/use-auth";
import Login from "./Login";

import logo from "../assets/logo.svg";
import { toggleMenu } from "../redux/slices/menuSlice";

const Header: React.FC = () => {
  const menu = useAppSelector((state) => state.menu.isActive);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAuth();
  const modal = useAppSelector((state) => state.loginModal.isActive);

  const nav = [
    { id: 0, url: "", title: "Home" },
    { id: 1, url: "about", title: "About us" },
    { id: 2, url: "subscription", title: "Create your plan" },
  ];

  const userAction = () => {
    dispatch(toggleMenu(false));
    if (user.isAuth) {
      navigate("/user");
    } else {
      dispatch(openModal());
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="CoffeeRoasters Logo" />
        </div>
        <div
          className={
            menu ? "header__overlay header__overlay--active" : "header__overlay"
          }
        ></div>
        <div
          className={
            menu ? "header__inner header__inner--active" : "header__inner"
          }
        >
          <ul className="header__nav">
            {nav.map((obj) => (
              <li key={obj.id}>
                <NavLink
                  to={`/${obj.url}`}
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  onClick={() => dispatch(toggleMenu(false))}
                >
                  {obj.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <p
            className="header__link header__login"
            onClick={() => userAction()}
          >
            {user.isAuth ? "Manage subscription" : "Log In"}
          </p>
          {modal && <Login />}
        </div>
        <div
          className={menu ? "menu menu--active" : "menu"}
          aria-label="Open menu"
          aria-expanded="false"
          onClick={() => dispatch(toggleMenu(!menu))}
        >
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
