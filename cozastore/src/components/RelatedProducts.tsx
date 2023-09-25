import React from "react";
import ProductItem from "./ProductItem";
import { ProductItemType } from "../types/type";

interface Props {
  relatedProducts: ProductItemType[];
}

const RelatedProducts: React.FC<Props> = ({ relatedProducts }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedProducts.map((item) => (
              <ProductItem
                img={item.img}
                price={item.price}
                title={item.title}
                key={item.id}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
