import React, { Component } from 'react';
import Tweet from './Tweet';
import buildConfigObj from './Data';

class Stream extends Component {
  render() {
    const data = buildConfigObj();
    let tweetStream = [];
    data.forEach(element => {
      tweetStream.push(<Tweet key={element.key} details={element} />)
    });

    return(
      <div>
        { tweetStream }
      </div>
    );
  }
}

export default Stream;