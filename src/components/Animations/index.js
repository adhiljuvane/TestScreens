import React from "react";
import "./index.css";
import Sitting from "../../res/sitting-3.png";

export default class AnimationOne extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          className="sittingImage"
          src={Sitting}
          alt="sitting"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          className="sittingImage"
          src={Sitting}
          alt="sitting"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    );
  }
}
