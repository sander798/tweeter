/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweetData) {
  const $tweet = $(`
    <article>
      <header> ${tweetData.user.name} <span> ${tweetData.user.handle} </span></header>
      <p> ${tweetData.content.text} </p>
      <footer>
        <span> ${tweetData.created_at} </span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
  
  return $tweet;
};


const renderTweets = function(tweetsArray) {
  for (let tweet of tweetsArray){    
    $('#tweet-container').append(createTweetElement(tweet));   
  }
};


$(function() {
  
  //Get and render existing tweets
  renderTweets(data);
  
  //Post new tweet
  /*$(".new-tweet button").on("click", function() {
    if ($(".new-tweet textarea")){
      
    }
    
    const $tweet = createTweetElement(tweetData);
  });*/

});