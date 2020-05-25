import React from "react";
import "./index.css";

export default class Loading extends React.Component {
  render() {
    const query = `{"products":{ $elemMatch: { _id: Product.Id } } }`;
    console.log(query);
    return (
      <div className="loading">
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
        <div className="object"></div>
      </div>
    );
  }
}
