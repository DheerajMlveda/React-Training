import React from "react";
import "./App.css";
import ThemeContainer from "./ThemeContainer";
import ThemeCard from "./ThemeCard";

function App() {
  return (
    <div className="App">
      <ThemeContainer>
        <ThemeCard />
      </ThemeContainer>
    </div>
  );
}

export default App;
