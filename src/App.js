import React from "react";
import Chrono from "./Chrono";
import "./Chrono.css"

const appStyle = {
  maxWidth: 1300,
  minHeight: 574
};

const App = () => {
  return <div className={"container"} style={appStyle}><Chrono/></div>;
};

export default App;
