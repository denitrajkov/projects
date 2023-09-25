import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import products from "../library";
import { Banner } from "./Banner";
import { ProductType } from "../types/types";

export const CardDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  let product: ProductType | undefined;

  // if we want to get the state locally and not fetch from BE, we can get it via State (look in Card.tsx Link)
  if (state?.product) {
    product = state.product;
    console.log("product passed from state");
  } else {
    product = products.find((product) => product.id === +(id ?? "0"));
    console.log("product fetched from BE");
  }

  if (!product) {
    return <Navigate to={"/error"} />;
  }

  return (
    <>
      <Banner title={product.title} />
      <div className="CardDetail container">
        <div className="row">
          <div className="col-6">
            <img src={`/img/${product.id}.jpg`} alt="" />
          </div>
          <div className="col-6 info-cont">
            <p className="price">{product.price}</p>
            <h2 className="title">{product.title}</h2>

            {Array(product.stars)
              .fill(null)
              .map((_, index) => {
                return (
                  <i
                    key={`star-${product!.id}-${index}`}
                    className="fa fa-star"
                  ></i>
                );
              })}

            <p>{product.desc}</p>
            <button className="button">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
