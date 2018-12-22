import React from 'react';
import './index.css' ;

export default class Screen5 extends React.Component {
  render(){
    return(
      <div style={{width : "150px" , height : "150px" , backgroundColor : "#08c" , borderRadius : "10px" , display : "flex" , flexDirection : "column" , margin : "15px"}}>
        <div style={{backgroundColor : "#4cabdb" , borderRadius : "10px 10px 0px 0px " , display : "flex" , alignItems : "center" , justifyContent : "center"}}>BUS FEE</div>
        <div style={{height : "80%" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>$3150</div>
        <div style={{display : "flex" , justifyContent : "flex-end" , paddingRight : "10px" , paddingBottom : "5px"}}>Pending</div>
      </div>
    )
  }
}
