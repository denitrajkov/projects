import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header: React.FC = () => {
  const { asPath, push } = useRouter();
  const [searchQ, setSearchQ] = useState("");

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // set the search query and redirect to the search page
    push({
      pathname: "/search",
      query: {
        q: searchQ,
      },
    });

    setSearchQ("");
  };

  return (
    <div className="position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
        <Link href="/">
          <a className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restoran
            </h1>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link href="/">
              <a className={asPath === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={asPath === "/about" ? "nav-item nav-link active" : "nav-item nav-link"}>
                About
              </a>
            </Link>
            <Link href="/servicesPage">
              <a
                className={
                  asPath === "/servicesPage" ? "nav-item nav-link active" : "nav-item nav-link"
                }
              >
                Services
              </a>
            </Link>
            <Link href="/menu">
              <a className={asPath === "/menu" ? "nav-item nav-link active" : "nav-item nav-link"}>
                Menu
              </a>
            </Link>
          </div>
          <form className="d-flex my-2 my-lg-0" onSubmit={onSearchSubmit}>
            <div className="me-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
