export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/img/logo.png" alt="" className="img-logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link text-uppercase" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#">
                Bikes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase ">Gear</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase">Parts</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase">Tires</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase">Service-info</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase">Catalogues</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase">Contact</a>
            </li>
          </ul>

          <div>
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <i className="fas fa-search  nav-link"></i>
              </li>
              <li>
                <i className="fas fa-shopping-bag nav-link"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
