import React from 'react' ;
import './index.css' ;

export default class ButtonDark extends React.Component{
  render(){
    return(
      <div style={{width : "100%" , height : "100vh" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <div className="buttonDark">Buy Now</div>
      </div>
    )
  }
}
