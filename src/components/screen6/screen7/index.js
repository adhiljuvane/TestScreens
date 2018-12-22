import React from 'react';
import { Button } from "antd" ;

export default class Screen7 extends React.Component {
  render(){
    return(
      <div style={{width : "150px" , backgroundColor : "#08C" , borderRadius : "10px" , display : "flex" , flexDirection : "column" , margin : "15px" , justifyContent : "center" , alignItems : "center"}}>
        <div style={{width: "100%" , borderRadius : "10px 10px 0px 0px " , display : "flex" , alignItems : "center" , justifyContent : "center"}}>JUNE 1</div>
        <div style={{height : "80%" , display : "flex" , justifyContent : "felx-start" , flexDirection : "column"}}>
          <div style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding : "10px" }}>
            <div>Total</div>
            <div>17800</div>
          </div>
          <div style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding : "10px" }}>
            <div>Pending</div>
            <div>17400</div>
          </div>
          <div style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding : "10px" }}>
            <div>Paid</div>
            <div>1750</div>
          </div>
          <div style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding : "10px" }}>
            <div>Fine</div>
            <div>150</div>
          </div>
          <div style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding : "10px" }}>
            <div>Due</div>
            <div>1700</div>
          </div>
        </div>
        <Button type="default" style={{margin : "10px"}}>Primary</Button>
      </div>
    )
  }
}
