import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

function Navbar() {
  let cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;

    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }

    return count;
  };

  return (
    <nav className="navbar navbar-expand-lg nabbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Sports Fanatic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <Link className="btn btn-outline-light" to="/cart">
              <span className="badge bg-primary">{getCount()}</span>
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
