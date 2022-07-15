import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg nabbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                Navbar
                </Link>
                <button
                className="navbar-toggler"
                type="button"data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
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
                </ul>
                <form className="d-flex" role="search">
                    
                    <Link className="btn btn-outline-light" to="/cart">
                    View Cart
                    </Link>
                </form>
            </div>
        </div>
    </nav>
        
     
    );
}

export default Navbar;