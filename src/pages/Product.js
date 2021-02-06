import React, { useState } from "react";
import "../styles/Product.scss";

const Product = (props) => {
  let [prodNumber, setProdNumber] = useState(1);
  let cosmetic = props.location.state.cosmetic;

  let oldProducts = JSON.parse(localStorage.getItem("products")) || [];

  const addProduct = () => {
    // const productInput = document.getElementById("product-input").value;
    const productInput = prodNumber;
    if (productInput === "") {
      alert("Podaj ilość produktu");
    } else {
      console.log(
        oldProducts.findIndex((product) => product.cosmetic.id === cosmetic.id)
      );
      let productIndex = oldProducts.findIndex(
        (product) => product.cosmetic.id === cosmetic.id
      );
      if (productIndex !== -1) {
        oldProducts[productIndex].amount =
          Number(oldProducts[productIndex].amount) + Number(productInput);
        window.localStorage.setItem("products", JSON.stringify(oldProducts));
      } else {
        let newProduct = {
          amount: Number(productInput),
          cosmetic: cosmetic,
        };
        oldProducts.push(newProduct);
        window.localStorage.setItem("products", JSON.stringify(oldProducts));
      }
      setProdNumber(1);
    }
  };

  const changeProdNumber = (type) => {
    let newNumber = prodNumber;
    if (type === "add") {
      newNumber++;
      setProdNumber(newNumber);
    }
    if (type === "subtract") {
      newNumber--;
      if (newNumber < 0) return;
      setProdNumber(newNumber);
    }
  };

  return (
    <div className="container" id="product">
      <div className="row product-container">
        <div className="col-lg-5 product-left text-center">
          <img src={cosmetic.image.default} alt="" />
        </div>
        <div className="col-lg-7 product-right">
          <h2>{cosmetic.title}</h2>
          <p className="product-desc">{cosmetic.description}</p>
          <p className="product-cap">{cosmetic.capacity}</p>
          <p className=" product-price text-right">
            {cosmetic.price.toFixed(2)}zł
          </p>
          <div className="add-product text-right">
            <span
              className="add-product-subtraction noselect"
              onClick={() => changeProdNumber("subtract")}
            >
              -
            </span>
            <input
              type="number"
              id="product-input"
              value={prodNumber}
              min={0}
              onChange={(e) => setProdNumber(e.target.value)}
            />
            <span
              className="add-product-addition noselect"
              onClick={() => changeProdNumber("add")}
            >
              +
            </span>
            <button
              className="btn-product"
              onClick={addProduct}
              data-toggle="modal"
              data-target="#confirmation"
            >
              Do koszyka
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal"
        tabIndex="-1"
        id="confirmation"
        aria-labelledby="confirmationModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>Dodano do koszyka</p>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
