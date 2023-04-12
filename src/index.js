import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import DataFetching from "./DataFetching";
// import App from "./App";
// import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>

    <DataFetching/>
    </ErrorBoundary>
    {/* <App /> */}
    {/* <ErrorBoundary>
      <Hero heroName="batman" />
      <Hero heroName="superman" />
      <Hero heroName="wonder-woman" />
      <Hero heroName="joker" />
    </ErrorBoundary> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
