import React, { Component } from "react";
import Test from "./Test";
export default class Main extends Component {
  handleClick = () => {
    fetch("https://api.punkapi.com/v2/beers?abv_gt=10")
      .then(resp => resp.json())
      .then(myJson => console.log(myJson));
  };
  render() {
    return (
      <div>
        <h1>This is my portfolio site!</h1>
        <Test
          test={"React really is awesome, can't wait to work with it more!"}
        />
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
