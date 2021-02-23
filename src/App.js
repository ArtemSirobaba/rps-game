import React from "react";
import Game from "./components/Game";

const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="background">
      <Game />
    </div>
  );
};

export default App;
