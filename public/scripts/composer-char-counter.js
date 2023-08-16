$(function() { // Apparently wrapping this like so is necessary?
  $("#tweet-text").on("input", function() {
    const count = 140 - this.value.length;
    
    //this.parentNode.childNodes[5].childNodes[3].value = count; // WHY WOULD I?
    $(".counter").val(count);
    
    if (count < 0) {
      this.style.color = "red";
    } else {
      this.style.color = "black";
    }
  });
});
