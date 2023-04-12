import React from "react";
import "./App.css";
// import ThemeContainer from "./ThemeContainer";
// import ThemeCard from "./ThemeCard";
import DataFetching from "./DataFetching";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <DataFetching />
      </ErrorBoundary>
    </div>
  );
}

export default App;
