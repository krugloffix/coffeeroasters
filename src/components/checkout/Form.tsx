import React from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setIsSub } from "../../redux/slices/userSlice";

import Summary from "../subscription/Summary";

const Form = () => {
  const [error, setError] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const id = useAppSelector((state) => state.user.id);
  const email = useAppSelector((state) => state.user.email);
  const plan = useAppSelector((state) => state.plan.plan);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const date = new Date().toString();
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 2);

  const inputName = React.useRef<HTMLInputElement>(null);
  const inputLastName = React.useRef<HTMLInputElement>(null);
  const inputPhone = React.useRef<HTMLInputElement>(null);
  const inputPostcode = React.useRef<HTMLInputElement>(null);
  const inputAddress = React.useRef<HTMLInputElement>(null);
  const selectCountry = React.useRef<HTMLSelectElement>(null);

  const confirmHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "subs", `${id}`), {
        address: inputAddress.current?.value,
        country: selectCountry.current?.value,
        delivery: plan.delivery,
        deliveryDate: deliveryDate.toString(),
        email: email,
        grind: plan.grind,
        id: id,
        lastName: inputLastName.current?.value,
        name: inputName.current?.value,
        phoneNumber: inputPhone.current?.value,
        postcode: inputPostcode.current?.value,
        preferences: plan.preferences,
        price: plan.price,
        quantity: plan.quantity,
        startDate: date,
        totalCost: plan.totalCost,
        type: plan.type,
      })
        .then(() => {
          dispatch(setIsSub(true));
        })
        .then(() => {
          alert("You have successfully subscribed!");
        })
        .then(() => {
          navigate("/");
        });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="form">
      <h3 className="form__title">Delivery information</h3>
      <div className="form__summary">
        <Summary
          summary={{
            preferences: plan.preferences,
            type: plan.type,
            quantity: plan.quantity,
            grind: plan.grind,
            delivery: plan.delivery,
            price: plan.price,
            totalCost: plan.totalCost,
          }}
        />
        <p>
          Total cost: <span>{`$${plan.totalCost}`}</span> / mo
        </p>
      </div>
      <form onSubmit={confirmHandler} className="form__main">
        <div className="form__personal">
          <h4 className="form__name">personal information</h4>
          <label htmlFor="name">First name</label>
          <input
            id="name"
            name="name"
            ref={inputName}
            type="text"
            placeholder="Irina"
            required
          />
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            ref={inputLastName}
            type="text"
            placeholder="Key"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            ref={inputPhone}
            id="phone"
            pattern="\+[0-9]{11}"
            placeholder="+7 999 999 99 99"
            required
          />
        </div>
        <div className="form__delivery">
          <h4 className="form__name">shipping address</h4>
          <label htmlFor="">Country</label>
          <select name="country" id="country" ref={selectCountry}>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
          <label htmlFor="postcode">Postcode</label>
          <input
            id="postcode"
            name="postcode"
            ref={inputPostcode}
            type="text"
            placeholder="NW1 6XE"
            required
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            ref={inputAddress}
            type="text"
            placeholder="221B Baker Street"
            required
          />
        </div>
        <div className="form__btn">
          <button className="main__btn" type="submit">
            Proceed to payment
          </button>
          {error && (
            <span className="form__error">
              An unexpected error occured. Please, try again later.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
