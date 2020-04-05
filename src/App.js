import React, { Component } from "react";
import logo from "./logo.svg";
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import Screen3 from "./components/screen3";
import Screen4 from "./components/screen4";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen1 />
      </div>
    );
  }
}

export default App;
