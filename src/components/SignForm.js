import logo from "../image/logo1.png";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const SignForm = () => {
  const [userDetail, setuserDetail] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
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
        location: userDetail.location,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("enter valid detail");
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
            type="text"
            className="form-control"
            id="NameInput"
            placeholder="John doe"
            name="name"
            value={userDetail.name}
            onChange={chang}
          />
          <label htmlFor="NameInput">Name</label>
        </div>
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
        <div className="form-floating mt-4">
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
        <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            id="LocationInput"
            placeholder="name@example.com"
            name="location"
            value={userDetail.location}
            onChange={chang}
          />
          <label htmlFor="LocationInput"> address</label>
        </div>

        <button className=" btn btn-success " type="submit">
          Sign in
        </button>
        {/* <button className="w-40 btn  btn-primary"> */}
        <Link to="/Login" className=" btn  btn-danger">
          Login
        </Link>
        {/* </button> */}
        <p className="m-5  text-muted">© 2023</p>
      </form>
      <Outlet />
    </div>
  );
};
export default SignForm;
