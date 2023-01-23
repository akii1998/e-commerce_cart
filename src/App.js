import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { Routes } from "react-router-dom";
import Product from "./component/Product/Product";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import Cart from "./component/Cart/Cart";
import { Route } from "react-router-dom";
import Login from "./component/button/Login";
import SignUp from "./component/button/SignUp";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { First } from "react-bootstrap/esm/PageItem";

const ErrorComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <img
          src="./assets/error.jpg"
          alt="error"
          height={"500px"}
          width={"700px"}
        />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorComponent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element=<First/>/> */}
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
