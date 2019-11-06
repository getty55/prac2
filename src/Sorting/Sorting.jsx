import React, { Component } from "react";
import "./Sorting.css";

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 30; ++i) array.push(randomize(5, 300));
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <button onClick={() => this.resetArray()}>Re-generate</button>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ backgroundColor: "red", height: `${value}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
