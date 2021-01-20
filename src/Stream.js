import React, { Component } from 'react';
import Tweet from './Tweet';
// import { readString } from 'react-papaparse';
// import dataFile from './TestCSV.js';
import Data from './Data';

class Stream extends Component {
  render() {
    const config = {
        user: {
          nickname: "biologist",
          name: "biologist",
          avatar: "favicon.ico",
          verified: true,
          locked: false
        },
        display: "default",
        text: "Look at this doe",
        image: "https://www.ericmcd.com/imgs/kevin.jpg",
        date: "3:32 PM · Feb 14, 1997",
        app: "Twitter for iPhone",
        retweets: 32674,
        quotedTweets: 1597,
        likes: 12700
      };
      const config2 = {
        user: {
          nickname: "biologist",
          name: "biologist",
          avatar: "favicon.ico",
          verified: true,
          locked: false
        },
        display: "default",
        text: "Oh c'mon, man!",
        image: "",
        date: "3:32 PM · Feb 14, 1997",
        app: "Twitter for iPhone",
        retweets: 32674,
        quotedTweets: 1597,
        likes: 12700
      };
      
      // const results = readString(dataFile, config);
      // console.log(results);
      const data = Data;
      console.log(data);



      

      
    return(
      <div>
        <Tweet details={config}/>
        <Tweet details={config2} />
      </div>
    );
  }
}

export default Stream;