import logo from "../image/logo1.png";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
const LogForm = () => {
  let navigate = useNavigate();
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
    // console.log(json);

    if (!json.success) {
      alert("enter valid detail");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", userDetail.email);
      // console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
    if (userDetail.email === "admin111@gmail.com") {
      localStorage.setItem("admin", true);
      // console.log(localStorage.getItem("admin"));
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
      <h4 className="h4 mb-3 fw-normal text-center">Please sign in</h4>
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
        </div>

        <button className=" btn btn-success " type="submit">
          login
        </button>
        {/* <button className="w-40 btn  btn-primary"> */}
        <Link to="/SignUp" className=" btn  btn-danger ms-3">
          sign in
        </Link>
        {/* </button> */}
        <p className="m-5  text-muted">© 2023</p>
      </form>
      <Outlet />
    </div>
  );
};
export default LogForm;
