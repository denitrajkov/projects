import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between  align-items-center border-bottom py-3">
      <NavLink
        to={"/"}
        className="text-decoration-none black text-uppercase font-weight-bold"
      >
        Restaurant
      </NavLink>
      <Link to={"/favorites"} className="text-decoration-none red">
        <i className="fas fa-2x fa-heart"></i>
      </Link>
    </nav>
  );
}
