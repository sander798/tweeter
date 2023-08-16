/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

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



$(function() {

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);

  $('#tweet-container').append($tweet);
  
  //Get existing tweets
  
  
  //Post new tweet
  /*$(".new-tweet button").on("click", function() {
    if ($(".new-tweet textarea")){
      
    }
    
    const $tweet = createTweetElement(tweetData);
  });*/

});