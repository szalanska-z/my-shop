import React, { useState, useEffect } from "react";
import { cosmetics } from "../cosmetics";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import Filters from "../components/Filters";

const Shop = (props) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (props.location.state) {
      setCategory(props.location.state.category);
    }
  }, [props.location.state]);

  let newCosmetics = [...cosmetics];

  const filterCosmetics = () => {
    if (category !== "") {
      newCosmetics = newCosmetics.filter((cosmetic) => {
        return cosmetic.category === category;
      });
    }
    if (subCategory !== "") {
      newCosmetics = newCosmetics.filter((cosmetic) => {
        return cosmetic.subcategory === subCategory;
      });
    }
    if (filter !== "") {
      newCosmetics = newCosmetics.sort((a, b) => {
        if (filter === "asc") {
          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price) {
            return 1;
          } else if (a.price === b.price) {
            return 0;
          }
        } else if (filter === "desc") {
          if (a.price > b.price) {
            return -1;
          } else if (a.price < b.price) {
            return 1;
          } else if (a.price === b.price) {
            return 0;
          }
        }
        return newCosmetics;
      });
    }
  };
  filterCosmetics();

  return (
    <div className="container" id="shop">
      <div className="row">
        <div className="col-12 col-lg-3">
          <Categories
            category={category}
            subCategory={subCategory}
            setCategory={(value) => setCategory(value)}
            setSubCategory={(value) => setSubCategory(value)}
          />
        </div>
        <div className="col-12 col-lg-9">
          <div className="filters-container">
            <Filters filter={filter} setFilter={(value) => setFilter(value)} />
          </div>
          <div className="cosmetics-container">
            {newCosmetics.map((cosmetic) => (
              <ProductCard key={cosmetic.id} cosmetic={cosmetic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
