import React, { Component } from 'react';
import Stream from './Stream';
import Navigation from './Navigation';
import Explore from './Explore';
import "fake-tweet/build/index.css";


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Navigation />
          </div>
          <div className="col-md-4">
            <Stream />
          </div>
          <div className="col-md-4">
            <Explore />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
