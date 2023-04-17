// import React, { useState } from "react";
import { BackTop, Space } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import AntdNav from "./AntdNav";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div style={{}}>
      <BackTop/>
      <BrowserRouter>
        <AntdNav />
      </BrowserRouter>
    </div>
  );
};

export default App;
