import { NavLink } from "react-router-dom";

type Props = {
  img: string;
  title: string;
};

export default function NavBar({ img, title }: Props) {
  return (
    <NavLink to="/">
      <div className="d-flex justify-content-center align-items-center position-relative borderBottom">
        <div className="image-container">
          <img src={img} alt={img} className="img-fluid" />
          <div className="overlay"></div>
        </div>
        <h1 className="position-absolute top-50 start-50 translate-middle text-uppercase text-white">
          {title}
        </h1>
      </div>
    </NavLink>
  );
}
