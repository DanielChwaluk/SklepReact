import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-light " to="/">Mój Sklep</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light " to="/">Strona główna</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Koszyk">Koszyk</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <hr className="border border-light"></hr>
    </>
  )
};

export default Layout;