import React from "react";
import "../styles/Basket.scss";

const BasketStep1 = (props) => {
  const orderProducts = JSON.parse(localStorage.getItem("products")) || [];
  console.log(orderProducts);

  const state = props.state;
  const stateMethods = props.stateMethods;

  let totalAmount = 0;
  orderProducts.forEach((item, index) => {
    let total = (item.amount * item.cosmetic.price).toFixed(2);
    totalAmount = (Number(totalAmount) + Number(total)).toFixed(2);
  });

  return (
    <div className="basketStep1">
      <div className="row">
        <div className="col-6">
          <h2 className="basket-step1-title">Twoje dane</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={state.name}
                onChange={(e) => stateMethods.setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Ulica i numer</label>
              <input
                type="text"
                className="form-control"
                id="street"
                value={state.street}
                onChange={(e) => stateMethods.setStreet(e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="postCode">Kod pocztowy</label>
                <input
                  type="text"
                  className="form-control"
                  id="postCode"
                  value={state.postCode}
                  onChange={(e) => stateMethods.setPostCode(e.target.value)}
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="city">Miasto</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={state.city}
                  onChange={(e) => stateMethods.setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mail">Adres e-mail</label>
              <input
                type="text"
                className="form-control"
                id="mail"
                value={state.mail}
                onChange={(e) => stateMethods.setMail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon kontaktowy</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={state.phone}
                onChange={(e) => stateMethods.setPhone(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-6">
          <h2 className="basket-step1-title">Podsumowanie zamówienia</h2>
          <p>
            Kwota do zapłaty:{" "}
            <span className="basketStep-totalAmount">{totalAmount}zł</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketStep1;
