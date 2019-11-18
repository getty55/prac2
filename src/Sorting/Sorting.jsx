import React, { Component } from "react";
import "./Sorting.css";
import { getAnimations } from "../MergeSort/MergeSort.js";

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
    for (let i = 0; i < 10; ++i) array.push(randomize(1, 10));
    this.setState({ array });
  }

  mergeSort() {
    const { array } = this.state;
    const animations = getAnimations(this.state.array);

    for (let i = 0; i < animations.length; ++i) {
      const arrayBars = document.getElementsByClassName("array-bar");
      setTimeout(() => {
        const [barOne, newValue] = animations[i];
        //console.log(barOne, newValue);
        //array[barOne] = newValue;
        this.setState({array});
        arrayBars[barOne].style.value = newValue;
        //arrayBars[barOne].textContent = newValue;
        //this.setState({array});
      }, i * 1);
    }
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <button onClick={() => this.resetArray()}>Re-generate</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: "orange" /*, height: `${value}px`*/
              }}
            >
              {value}{" "}
            </div>
          ))}
        </div>
      </>
    );
  }
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
