import React from 'react';
import FakeTweet from 'fake-tweet';
import data from './AnnihilationTweets.json';

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
      likes: data.likes,
      key: data.key
    }
    return (
      <FakeTweet config={tweetConfiguration}/>
    );
});
function buildConfigObj() {
  let assembledTweets = [];
  tweetData.forEach( e => {
    let part  = {};
    part.user = {};

    part.user.nickname = e.props.config.user.nickname;
    part.user.name = e.props.config.user.name;
    part.user.avatar = e.props.config.user.avatar;
    part.user.verified = e.props.config.user.verified;
    part.user.locked = e.props.config.user.locked;
    part.display = e.props.config.display;
    part.text = e.props.config.text;
    part.image = e.props.config.image;
    part.date = e.props.config.date;
    part.app = e.props.config.app;
    part.retweets = e.props.config.retweets;
    part.quotedTweets = e.props.config.quotedTweets;
    part.likes = e.props.config.likes;
    part.key = e.props.config.key;
    
    assembledTweets.push(part);
  })
  return assembledTweets;
}

export default buildConfigObj;