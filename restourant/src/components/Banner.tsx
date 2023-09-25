import React from "react";

export interface BannerInterface {
  title: string;
  content: string;
  button_title: string;
}

interface Props {
  banner_content: BannerInterface;
}

const Banner: React.FC<Props> = ({ banner_content }) => {
  return (
    <div className="py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white">{banner_content.title}</h1>
            <p className="text-white mb-4 pb-2">{banner_content.content}</p>
            <a href="#" className="btn btn-primary py-sm-3 px-sm-5 me-3">
              {banner_content.button_title}
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
