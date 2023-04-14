import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
// import Contact from "./Components/Contact";
import Navbar from "./Navbar";
import OrderSummary from "./Components/OrderSummary";
import Nomatch from "./Components/Nomatch";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import AuthProvider from "./Components/Auth";
import Profile from "./Components/Profile";
import LogIn from "./Components/LogIn";
const LazyContact = React.lazy(() => import("./Components/Contact"));
// import ThemeContainer from "./ThemeContainer";
// import ThemeCard from "./ThemeCard";
// import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="Contact" element={<Contact />} /> */}
        <Route
          path="Contact"
          element={
            <React.Suspense fallback="loading">
              <LazyContact />
            </React.Suspense>
          }
          />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="Products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path='login' element={<LogIn/>}/>
        <Route path="*" element={<Nomatch />} />
      </Routes>
          </AuthProvider>
    </div>
  );
}

export default App;
