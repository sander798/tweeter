$(function() { // Apparently wrapping this like so is necessary?
  $("#tweet-text").on("input", function() {
    const count = 140 - this.value.length;
    
    $(".counter").val(count);
    
    if (count < 0) {
      this.style.color = "red";
      $(".counter").css("color", "red");
    } else {
      this.style.color = "black";
      $(".counter").css("color", "black");
    }
  });
});
