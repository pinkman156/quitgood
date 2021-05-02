import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/Form.css";

export default function Element(props) {
  const percentage = props.perc;

  return (
    <div className="res">
      <div className="below">
        <h2 className="name">{props.name} </h2>
        <h4 className="info">{props.info}</h4>
      </div>
      <div className="prog" style={{ height: 100, width: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            textColor: "white",
            pathColor: "#d0ec32",
            strokeLinecap: "butt",
            trailColor: "black",
            textSize: "20px",
            pathTransitionDuration: 4,

            backgroundColor: "black",
          })}
        />
      </div>
    </div>
  );
}
