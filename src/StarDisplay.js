import React from 'react';
import "./StarDisplay.css";
import utils from "./utils.js";


const StarDisplay = props => (
  <>
   {utils.range(1, props.count).map((starId) => (
    <div key={starId} className="star" />
  ))}
  </>
);



export default StarDisplay;