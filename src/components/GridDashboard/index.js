import React from "react";
import { FaBatteryHalf, FaRunning, FaBed, FaDumbbell } from "react-icons/fa";

const GridDashboard = () => {
  return (
    <div className="grid-container">
      <div className="grid-bg1">
        <h2>
          16 <span>| 24</span>
        </h2>
        <p>goals Completed</p>
      </div>
      <div className="grid-bg1">
        <h2>
          <FaBatteryHalf style={{ color: "white" }} />
        </h2>
        <p>Respiration</p>
      </div>
      <div className="grid-bg2">
        <h2>
          <FaRunning style={{ color: "white" }} />
        </h2>
        <p>Miles</p>
      </div>
      <div className="grid-bg1">
        <h2>36 &deg;</h2>
        <p>Temprature</p>
      </div>
      <div className="grid-bg1">
        <h2>
          <FaBed style={{ color: "white" }} />
        </h2>
        <p>Sleep Keep</p>
      </div>
      <div className="grid-bg2">
        <h2>
          98 <span>bpm</span>
        </h2>
        <p>Heart Rate</p>
      </div>
      <div className="grid-bg1">
        <h2>
          170 <span>lbs</span>
        </h2>
        <p>Weight</p>
      </div>
      <div className="grid-bg1">
        <h2>
          28 <span>%</span>
        </h2>
        <p>Fat Percentage</p>
      </div>
      <div className="grid-bg2">
        <h2>
          118 <span>mgdl</span>
        </h2>
        <p>Blood Glucose</p>
      </div>
      <div className="grid-bg2">
        <h2>
          680 <span>kcal</span>
        </h2>
        <p>AVG Consumption</p>
      </div>
      <div className="grid-bg2">
        <h2>
          <FaDumbbell style={{ color: "white" }} />
        </h2>
        <p>Workouts</p>
      </div>
      <div className="grid-bg2">
        <h2>
          85 <span>%</span>
        </h2>
        <p>Body Hydration</p>
      </div>
    </div>
  );
};

export default GridDashboard;
