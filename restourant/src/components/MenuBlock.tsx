import React from "react";

export interface MenuItemInterface {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuBlockInterface {
  preTitle: string;
  title: string;
}

interface Props {
  menuBlock: MenuBlockInterface;
  menu: MenuItemInterface[];
}

const MenuBlock: React.FC<Props> = ({ menuBlock, menu }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {menuBlock.preTitle}
          </h5>
          <h1 className="mb-5">{menuBlock.title}</h1>
        </div>
        <div className=" text-center">
          <div className="row g-4">
            {menu.map(menuItem => (
              <div key={menuItem.id} className="col-lg-6">
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid rounded"
                    src={menuItem.image}
                    alt=""
                    style={{ width: "80px" }}
                  />
                  <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span>{menuItem.name}</span>
                      <span className="text-primary">${menuItem.price}</span>
                    </h5>
                    <small className="fst-italic">{menuItem.description}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBlock;
