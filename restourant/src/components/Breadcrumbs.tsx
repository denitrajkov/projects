import Link from "next/link";
import React from "react";

interface Props {
  title: string;
}

const Breadcrumbs: React.FC<Props> = ({ title }) => {
  return (
    <div className="py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item text-white active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
