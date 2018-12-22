import React from "react" ;
import './index.css' ;
import Screen7 from "./screen7"

export  default class Screen6 extends React.Component {
  render(){
    return(
      <div className="screen6" style={{width : "100%" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent: "center"}}>
        <div style={{fontSize : "22px"}}>FEE DETAILS NEHA ROSE JAYAN</div>
        <div style={{display : "flex" , flexWrap : "wrap"}}>
          <Screen7/>
          <Screen7/>
          <Screen7/>
          <Screen7/>
        </div>
      </div>
    )
  }
}
