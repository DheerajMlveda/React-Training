import React, { useState } from "react";

export const themeContext = React.createContext();
export const themeUpdateContext = React.createContext();

function ThemeContainer({ children }) {
  const [themeVariant, setThemeVariant] = useState(false);

  function updateTheme() {
    setThemeVariant((prev) => !prev);
  }
  return (
    <div>
      <themeContext.Provider value={themeVariant}>
        <themeUpdateContext.Provider value={updateTheme}>
          {children}
          <h1>hello</h1>
        </themeUpdateContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default ThemeContainer;
