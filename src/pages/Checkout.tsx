import React from "react";
import Hero from "../components/Hero";
import Form from "../components/checkout/Form";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1 className="visually-hidden">CoffeeRoasters Checkout</h1>
      <Hero
        title="Checkout"
        text="Please, write your delivery information so we can send you your
        coffee. After completing info you will be redirected to payment page."
      />
      <Form />
    </div>
  );
};

export default Checkout;
