import React, { useState, useEffect } from "react";
import "../styles/Basket.scss";

const BasketStart = () => {
  const [render, setRender] = useState(false);
  const oldProducts = JSON.parse(localStorage.getItem("products")) || [];
  // console.log(oldProducts);

  let totalAmount = 0;
  oldProducts.forEach((item, index) => {
    let total = (item.amount * item.cosmetic.price).toFixed(2);
    totalAmount = (Number(totalAmount) + Number(total)).toFixed(2);
  });

  // console.log(oldProducts);
  const deleteProduct = (i) => {
    oldProducts.splice(i, 1);
    // console.log(oldProducts);
    window.localStorage.setItem("products", JSON.stringify(oldProducts));
    setRender(!render);
  };

  return (
    <div className="basket-container w-100 py-5">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">Produkty</th>
            <th scope="col">Cena za sztukę</th>
            <th scope="col">Ilość</th>
            <th scope="col">Cena całkowita</th>
            <th scope="col">Usuń</th>
          </tr>
        </thead>
        <tbody>
          {oldProducts.map((product, index) => {
            return (
              <tr className="text-center" key={index}>
                <td>
                  <img
                    className="basket-start-img"
                    src={product.cosmetic.image.default}
                    alt=""
                  />
                  {product.cosmetic.name}
                </td>
                <td>{product.cosmetic.price.toFixed(2)}</td>
                <td>{product.amount}</td>
                <td>{(product.cosmetic.price * product.amount).toFixed(2)}</td>
                <td onClick={() => deleteProduct(index)}>X</td>
              </tr>
            );
          })}
          <tr className="text-center">
            <td></td>
            <td></td>
            <td>SUMA</td>
            <td>{totalAmount}zł</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasketStart;
