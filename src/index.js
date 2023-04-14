import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import DataFetching from "./DataFetching";
import App from "./App";
// import Container from "./Container";
// import Hero from "./Hero";
// import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary>
      <DataFetching />
    </ErrorBoundary> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Container/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
