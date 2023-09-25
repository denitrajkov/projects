import React from "react";

export interface ServiceItemInterface {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesBlockInterface {
  preTitle: string;
  title: string;
}

interface Props {
  servicesBlock: ServicesBlockInterface;
  services: ServiceItemInterface[];
}

const Services: React.FC<Props> = ({ servicesBlock, services }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {servicesBlock.preTitle}
          </h5>
          <h1 className="mb-5">{servicesBlock.title}</h1>
        </div>
        <div className="row g-4">
          {services.map(ser => (
            <div key={ser.id} className="col-lg-3 col-sm-6">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className={`${ser.icon} text-primary mb-4`} />
                  <h5>{ser.title}</h5>
                  <p>{ser.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
