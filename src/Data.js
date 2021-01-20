import React from 'react';
import FakeTweet from 'fake-tweet';
import data from './Test.json';

let tweetConfiguration;

const tweetData = data.map( (data)  => {
    tweetConfiguration = {
      user: {
        nickname: data.user.nickname,
        name: data.user.name,
        avatar: data.user.avatar,
        verified: data.user.verified,
        locked: data.user.locked
      },
      display: data.display,
      text: data.text,
      image: data.image,
      date: data.date,
      app: data.app,
      retweets: data.retweets,
      quotedTweets: data.quotedTweets,
      likes: data.likes
    }
    return (
      <FakeTweet config={tweetConfiguration}/>
    );
});

export default tweetData;