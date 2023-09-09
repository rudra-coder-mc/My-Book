import "./App.css";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import About from "./containers/About";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
