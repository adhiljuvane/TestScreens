import React from "react" ;
import "./index.css" ;
import Screen5 from "./screen5" ;

export default class Screen4 extends React.Component{
  render(){
    return(
      <div className="screen4">
        <div style={{fontSize : "30px"}}>JUNE 1</div>
        <div style={{display : "flex" , flexWrap : "wrap"}}>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
          <Screen5/>
        </div>
      </div>
    )
  }
}
