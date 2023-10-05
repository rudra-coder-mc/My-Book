import logo from "../image/logo1.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SignForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [userDetail, setuserDetail] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
      }),
    });
    const status = await response.json();
    if (!status.success) {
      setError(status.errors);
    }
    if (status.success) {
      navigate("/login");
    }
  };
  console.log(error);
  const handleChange = (event) => {
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
      <h4 className="h4 mb-3 fw-normal text-center">Please sign in</h4>
      <form onSubmit={handelSubmit}>
        <div className="form-floating mt-4">
          <input
            type="text"
            className="form-control"
            id="NameInput"
            placeholder="John doe"
            name="name"
            value={userDetail.name}
            onChange={handleChange}
          />
          <label htmlFor="NameInput">Name</label>
          {Array.isArray(error) ? (
            error.filter((er) => er.param === "name").length !== 0 && (
              <span className="text-danger">
                {error
                  .filter((er) => er.param === "name")
                  .map((erName) => erName.msg)}
              </span>
            )
          ) : (
            <span className="text-danger">{error}</span>
          )}
        </div>
        <div className="form-floating mt-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={userDetail.email}
            onChange={handleChange}
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
            onChange={handleChange}
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
          Sign in
        </button>
        <p className="mt-3">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
        <p className="m-5  text-muted">© 2023</p>
      </form>
      <Outlet />
    </div>
  );
};
export default SignForm;
