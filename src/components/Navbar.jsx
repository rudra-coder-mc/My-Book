import { Outlet, Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import logo from "../image/logo1.png";
import { useState } from "react";
import Modal from "../Modal";
import Cart from "../containers/Cart";
const Navbar = () => {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  };
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand " to="/">
              {/* logo is not set  */}
              <img src={logo} height="30" alt="Logo" loading="lazy" />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/MyOrder">
                    My Order
                  </Link>
                </li>
              ) : (
                " "
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("authToken") ? (
              <>
                <Link className="btn btn-white  mx-1" to="/Login">
                  Login
                </Link>

                <Link className="btn btn-white  mx-1" to="/SignUp">
                  SignUp
                </Link>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <Link
                  className="text-reset me-3"
                  to="/"
                  onClick={() => setCartView(true)}
                >
                  <i className="fas fa-shopping-cart">
                    {" "}
                    <span class="badge rounded-pill badge-notification text-danger">
                      {data.length}
                    </span>
                  </i>
                </Link>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : (
                  ""
                )}
                <Link
                  className="btn btn-white  mx-1"
                  to="/"
                  onClick={handelLogout}
                >
                  Logout
                </Link>
              </div>
            )}
            {/* <!-- Left links --> */}
          </div>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
      <Outlet />
    </>
  );
};
export default Navbar;
