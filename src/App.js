import "./App.css";
import Home from "./component/Home/Home";
import { Routes } from "react-router-dom";
import Product from "./component/Product/Product";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import { Route } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

import CheckOut from "./component/Checkout/CheckOut";
import Cart from "./component/Cart/Cart";

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
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<ErrorComponent/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
