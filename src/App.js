import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Navbar";
import OrderSummary from "./Components/OrderSummary";
import Nomatch from "./Components/Nomatch";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users"
import UserDetails from "./Components/UserDetails"
// import ThemeContainer from "./ThemeContainer";
// import ThemeCard from "./ThemeCard";
// import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="Products" element={<Products />}>
          <Route index  element={<FeaturedProducts/>}/>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users/>}>
        <Route path=":userId" element={<UserDetails/> }/>
        <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
