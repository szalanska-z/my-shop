import React, { useState, useEffect } from "react";
import BasketStart from "../components/BasketStart";
import BasketStep1 from "../components/BasketStep1";
import BasketStep2 from "../components/BasketStep2";
import "../styles/Basket.scss";

const Basket = () => {
  const [step, setStep] = useState("0");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const state = { name, street, postCode, city, mail, phone };
  const stateMethods = {
    setName: (value) => setName(value),
    setStreet: (value) => setStreet(value),
    setPostCode: (value) => setPostCode(value),
    setCity: (value) => setCity(value),
    setMail: (value) => setMail(value),
    setPhone: (value) => setPhone(value),
  };

  const validateForm = (state) => {
    setIsValidate(true);
    setIsModalActive(false);
    for (let key of Object.keys(state)) {
      if (state[key].length === 0) {
        setIsValidate(false);
        setIsModalActive(true);
      }
    }
  };

  const handleStepPrev = () => {
    if (step === "1") setStep("0");
    else if (step === "2") setStep("1");
  };
  const handleStepNext = () => {
    if (step === "1") {
      validateForm(state);
    }
    if (step === "0") setStep("1");
    else if (step === "1" && isValidate) setStep("2");
  };

  return (
    <div className="container" id="basket">
      <div className="row">
        {step === "0" && <BasketStart />}
        {step === "1" && (
          <BasketStep1 state={state} stateMethods={stateMethods} />
        )}
        {step === "2" && <BasketStep2 state={state} />}
      </div>
      <div className="row basket-button px-3 d-flex justify-content-end">
        {step === "1" && (
          <button
            className=" btn-prev mr-auto"
            onClick={() => handleStepPrev()}
          >
            Wstecz
          </button>
        )}
        {step !== "2" && (
          <button className="btn-next" onClick={() => handleStepNext()}>
            Przejdź dalej
          </button>
        )}
      </div>
      {isModalActive && (
        <div className="modalForm-container">
          <div className="modalForm">
            <p>UZUPEŁNIJ SWOJE DANE!</p>
            <button
              type="button"
              className="btn modalForm-btn"
              onClick={() => setIsModalActive(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
