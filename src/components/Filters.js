import React from "react";

const Filters = (props) => {
  return (
    <div id="filters" className="filters">
      <div className="filters-sort">
        <p>Wybierz sortowanie</p>
        <div className="form-check d-inline-block">
          <input
            onChange={() => props.setFilter("asc")}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="asc"
          />
          <label
            className={
              props.filter === "asc"
                ? "form-check-label active"
                : "form-check-label"
            }
            htmlFor="exampleRadios1"
          >
            Rosnąco
          </label>
        </div>
        <div className="form-check d-inline-block">
          <input
            onChange={() => props.setFilter("desc")}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="desc"
          />
          <label
            className={
              props.filter === "desc"
                ? "form-check-label active"
                : "form-check-label"
            }
            htmlFor="exampleRadios2"
          >
            Malejąco
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
