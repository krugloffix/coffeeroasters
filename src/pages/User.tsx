import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchSub } from "../redux/slices/subscriptionSlice";
import { logOut } from "../redux/slices/userSlice";
import { setIsSub } from "../redux/slices/userSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import Hero from "../components/Hero";
import Summary from "../components/subscription/Summary";
import loading from "../assets/loading.svg";

import logoutIcon from "../assets/logout.png";

const User = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let isSub = useAppSelector((state) => state.user.isSub);

  const id = useAppSelector((state) => state.user.id);

  const sub = useAppSelector((state) => state.subscription.sub);
  const status = useAppSelector((state) => state.subscription.status);
  const [error, setError] = React.useState(false);

  const getSub = async () => {
    id && dispatch(fetchSub(id));
  };

  React.useEffect(() => {
    getSub();
  }, []);

  const logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const deleteSub = async () => {
    let isDelete = window.confirm(
      "Are you sure you want to cancel your subscription?"
    );
    try {
      isDelete &&
        (await deleteDoc(doc(db, "subs", `${id}`)).then(() => {
          dispatch(setIsSub(false));
        }));
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="user">
      <button className="user__signout" onClick={() => logout()}>
        <img src={logoutIcon} alt="Sign Out" />
      </button>
      <Hero
        title="Manage subscription"
        text="This is Your information page. Here you can create, update or cancel
        your subscription."
      />
      <div className="user__container">
        {isSub ? (
          status === "loading" ? (
            <img src={loading} alt="" aria-hidden="true" />
          ) : status === "error" || !sub ? (
            <p>
              Unexpected error occured while loading your subscription
              information. Please, try again later.
            </p>
          ) : (
            <div className="user__inner">
              <div className="user__plan">
                <h3 className="user__title">Plan information</h3>
                <div className="user__summary">
                  <Summary
                    summary={{
                      preferences: sub.preferences,
                      type: sub.type,
                      quantity: sub.quantity,
                      grind: sub.grind,
                      delivery: sub.delivery,
                      price: sub.price,
                      totalCost: sub.totalCost,
                    }}
                  />
                </div>
                <p className="user__date">
                  Next delivery date is{" "}
                  <span>{`${sub.deliveryDate.split(" ")[2]} ${
                    sub.deliveryDate.split(" ")[1]
                  } ${sub.deliveryDate.split(" ")[3]}`}</span>
                  .
                </p>
              </div>
              <div className="user__delivery">
                <h3 className="user__title">Delivery information</h3>
                <p>
                  “I am{" "}
                  <span>
                    {`${sub.name}`} {`${sub.lastName}`}
                  </span>
                  . My phone number is <span>{`${sub.phoneNumber}`}</span>. I
                  live in <span>{`${sub.address}`}</span>,{" "}
                  <span>{`${sub.country}`}</span>, with postcode{" "}
                  <span>{`${sub.postcode}`}</span> . Total cost of my monthly
                  payment is <span>${`${sub.totalCost}`}</span>”{" "}
                </p>
              </div>
            </div>
          )
        ) : (
          <p>
            You don't have an active subscription yet :c Want to create one?
          </p>
        )}
        {isSub ? (
          <div className="user__btns">
            <button
              className="main__btn user__edit"
              onClick={() => navigate("/subscription")}
            >
              Change subscription
            </button>
            <button className="user__delete" onClick={() => deleteSub()}>
              Delete subscription
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => navigate("/subscription")}
            className="main__btn user__btn"
          >
            Create your plan
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
