import React from "react";
import { ProductType } from "../types/types";
import { Link } from "react-router-dom";

export const Card = (product: ProductType) => {
  return (
    <div className="Card col-4">
      <Link to={`/details/${product.id}`} state={{ product }}>
        <img src={`/img/${product.id}.jpg`} alt="" />
        <h2>{product.title}</h2>
        <p className="price">{product.price}</p>

        {Array(product.stars)
          .fill(null)
          .map((_, index) => {
            return (
              <i key={`star-${product.id}-${index}`} className="fa fa-star"></i>
            );
          })}
      </Link>
    </div>
  );
};
