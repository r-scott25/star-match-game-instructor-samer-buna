import React from "react";
import "./PlayNumber.css";
import "./StarMatch.js";
import colors from "./colors.js";


const PlayNumber = (props) => (
  <button className="number" style={{ backgroundColor: colors[props.status]}} onClick={() => console.log("Num", props.number)}>
    {props.number}
  </button>
);

export default PlayNumber;
