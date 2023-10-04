import logo from "../image/logo1.png";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
const LogForm = () => {
  let navigate = useNavigate();
  const [error, setError] = useState([]);
  const [userDetail, setuserDetail] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetail.email,
        password: userDetail.password,
      }),
    });
    const json = await response.json();

    if (!json.success) {
      setError(json.errors);
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", userDetail.email);
      navigate("/");
    }

    if (json.admin) {
      localStorage.setItem("admin", true);
    }
  };
  const chang = (event) => {
    setuserDetail({ ...userDetail, [event.target.name]: event.target.value });
  };

  return (
    <div className="container  w-50">
      <img
        className="my-4 img-fluid mx-auto d-block "
        src={logo}
        alt=""
        width="90"
        height="90"
      />
      <h4 className="h4 mb-3 fw-normal text-center">Please Login in</h4>
      <form onSubmit={handelSubmit}>
        <div className="form-floating mt-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={userDetail.email}
            onChange={chang}
          />
          <label htmlFor="floatingInput">Email address</label>
          {Array.isArray(error) ? (
            error.filter((er) => er.param === "email").length !== 0 && (
              <span className="text-danger">
                {error
                  .filter((er) => er.param === "email")
                  .map((erName) => erName.msg)}
              </span>
            )
          ) : (
            <span className="text-danger">{error}</span>
          )}
        </div>
        <div className="form-floating my-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={userDetail.password}
            onChange={chang}
          />
          <label htmlFor="floatingPassword">Password</label>
          {Array.isArray(error) ? (
            error.filter((er) => er.param === "password").length !== 0 && (
              <span className="text-danger">
                {error
                  .filter((er) => er.param === "password")
                  .map((erName) => erName.msg)}
              </span>
            )
          ) : (
            <span className="text-danger">{error}</span>
          )}
        </div>

        <button className=" btn btn-success " type="submit">
          login
        </button>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/SignUp" className="">
            sign in
          </Link>{" "}
        </p>
        <p className="m-5  text-muted">© 2023</p>
      </form>
      <Outlet />
    </div>
  );
};
export default LogForm;
