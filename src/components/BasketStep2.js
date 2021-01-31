import React from "react";
import "../styles/Basket.scss";

const BasketStep2 = (props) => {
  const orderProducts = JSON.parse(localStorage.getItem("products")) || [];
  const state = props.state;

  let totalAmount = 0;
  orderProducts.forEach((item, index) => {
    let total = (item.amount * item.cosmetic.price).toFixed(2);
    totalAmount = (Number(totalAmount) + Number(total)).toFixed(2);
  });

  return (
    <div className="basketStep2">
      <h2>Dziękujemy za złożenie zamówienia!</h2>
      <h3>Twoje dane:</h3>
      <p>{state.name}</p>
      <p>{state.street}</p>
      <p>{state.postCode}</p>
      <p>{state.city}</p>
      <p>{state.mail}</p>
      <p>{state.phone}</p>
      <h3>Kwota zamówienia:</h3>
      <p className="basketStep-totalAmount">{totalAmount}zł</p>
    </div>
  );
};

export default BasketStep2;
