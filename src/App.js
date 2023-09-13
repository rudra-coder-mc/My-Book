import "./App.css";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import About from "./containers/About";
import SignUp from "./containers/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./containers/MyOrder";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MyOrder" element={<MyOrder />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
