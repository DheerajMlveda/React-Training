// import React, { useState } from "react";
import { BackTop, Space } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import AntdNav from "./AntdNav";
import { BrowserRouter } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";

const App = () => {
  const User = createContext();
  return (
    <div style={{}}>
      <BackTop />
      <BrowserRouter>
        <User.Provider value={{}}>
          <AntdNav />
        </User.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
