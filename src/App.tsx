import React from "react";
import imgD from "./dev.png";
import imgDS from "./user.svg";
import "./style.scss";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <img src={imgD} alt="dev" height={200} width={200} />
      <img src={imgDS} alt="dev" height={200} width={200} />
    </>
  );
};

export default App;
