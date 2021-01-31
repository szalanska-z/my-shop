import React from "react";
import "../styles/Shop.scss";

const Categories = (props) => {
  function changeCategory(value) {
    props.setCategory(value);
    props.setSubCategory("");
  }

  function changeSubCategory(value, subValue) {
    props.setCategory(value);
    props.setSubCategory(subValue);
  }

  return (
    <div id="categories" className="categories">
      {/* <h2 className="categories--title">Kategorie</h2> */}
      <div className="categories-content">
        <div>
          <h3
            onClick={() => changeCategory("face")}
            className={props.category === "face" ? "active" : ""}
          >
            Twarz
          </h3>
          <p
            onClick={() => changeSubCategory("face", "face-wash")}
            className={props.subCategory === "face-wash" ? "active" : ""}
          >
            Żel do mycia twarzy
          </p>
          <p
            onClick={() => changeSubCategory("face", "face-cream-day")}
            className={props.subCategory === "face-cream-day" ? "active" : ""}
          >
            Krem na dzień
          </p>
          <p
            onClick={() => changeSubCategory("face", "face-cream-night")}
            className={props.subCategory === "face-cream-night" ? "active" : ""}
          >
            Krem na noc
          </p>
        </div>
        <div>
          <h3
            onClick={() => changeCategory("hair")}
            className={props.category === "hair" ? "active" : ""}
          >
            Włosy
          </h3>
          <p
            onClick={() => changeSubCategory("hair", "hair-shampoo")}
            className={props.subCategory === "hair-shampoo" ? "active" : ""}
          >
            Szampon do włosów
          </p>
          <p
            onClick={() => changeSubCategory("hair", "hair-conditioner")}
            className={props.subCategory === "hair-conditioner" ? "active" : ""}
          >
            Odżywka do włosów
          </p>
          <p
            onClick={() => changeSubCategory("hair", "hair-mask")}
            className={props.subCategory === "hair-mask" ? "active" : ""}
          >
            Maska do włosów
          </p>
        </div>
        <div>
          <h3
            onClick={() => changeCategory("body")}
            className={props.category === "body" ? "active" : ""}
          >
            Ciało
          </h3>
          <p
            onClick={() => changeSubCategory("body", "body-wash")}
            className={props.subCategory === "body-wash" ? "active" : ""}
          >
            Żel pod prysznic
          </p>
          <p
            onClick={() => changeSubCategory("body", "body-peeling")}
            className={props.subCategory === "body-peeling" ? "active" : ""}
          >
            Peeling
          </p>
          <p
            onClick={() => changeSubCategory("body", "body-balm")}
            className={props.subCategory === "body-balm" ? "active" : ""}
          >
            Balsam do ciała
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
