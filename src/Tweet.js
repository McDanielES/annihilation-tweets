import React, { Component } from "react";
import FakeTweet from "fake-tweet";
import './App.css';
import "fake-tweet/build/index.css";

class Tweet extends Component {
  render() {
    const details = this.props.details;
    return (
      <div className="App">
        <FakeTweet config={details} />
      </div>
    );
  }
}

export default Tweet;
