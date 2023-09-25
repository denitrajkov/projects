import React from "react";

export interface FeatureBlockInterface {
  preTitle: string;
  title: string;
  first_paragraph: string;
  image_one: string;
  image_two: string;
  usp_items: {
    id: string;
    title: string;
    content: string;
    icon: string;
  }[];
}

interface Props {
  featureBlock: FeatureBlockInterface;
}

const FeatureBlock: React.FC<Props> = ({ featureBlock }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="section-title">{featureBlock.preTitle}</h4>
            <h1 className="display-5 mb-4">{featureBlock.title}</h1>
            <p className="mb-4">{featureBlock.first_paragraph}</p>
            <div className="row g-4">
              {featureBlock.usp_items.map(usp => (
                <div className="col-12" key={usp.id}>
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src={usp.icon} alt="Icon" />
                    <div className="ms-4">
                      <h3>{usp.title}</h3>
                      <p className="mb-0">{usp.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img">
              <img className="img-fluid" src={featureBlock.image_two} alt="" />
              <img className="img-fluid" src={featureBlock.image_one} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
