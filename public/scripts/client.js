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

const escapeText = function(text) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

const createTweetElement = function(tweetData) {
  const $tweet = $(`
    <article>
      <header> ${escapeText(tweetData.user.name)} <span> ${escapeText(tweetData.user.handle)} </span></header>
      <p> ${escapeText(tweetData.content.text)} </p>
      <footer>
        <span> ${timeago.format(tweetData.created_at)} </span>
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
  $(document).ready(function() {
    $.get("/tweets", function(data, status) {      
      renderTweets(data);
    });
  });
  
  //Post new tweet
  $(document).on("submit", function(event) {
    event.preventDefault();
    
    $("#error-display").slideUp("fast");
    
    const newTweet = $("form").serialize();
    
    const tweetText = $("form textarea").val();
    
    if (tweetText.trim() === "" || tweetText.trim() === null) {
      $("#error-display").text("Tweet is blank!");
      //$("#error-display").css("display", "block");
      $("#error-display").slideDown("fast");
    } else if (tweetText.length > 140) { // TODO: Replace with variable
      $("#error-display").text("Tweet is too long!");
      //$("#error-display").css("display", "block");
      $("#error-display").slideDown("fast");
    } else {
      $.post("/tweets", newTweet, function() {
        $.get("/tweets", function(data, status) {      
          $("#tweet-container").empty();
          renderTweets(data);
        });
      });
    }
  });

});