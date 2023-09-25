import React from "react";
import products from "../library";
import { Card } from "./Card";

export const CardsCont = () => {
  return (
    <div className="CardCont container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">Products</h1>
        </div>
      </div>
      <div className="row">
        {products.map((product) => {
          return <Card key={`product-${product.id}`} {...product} />;
        })}
      </div>
    </div>
  );
};
