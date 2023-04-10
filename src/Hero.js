import React from "react";

function Hero(props) {
  if (props.heroName === "joker") throw new Error("Name should not be a joker");
  return <div>{props.heroName}</div>;
}

export default Hero;
