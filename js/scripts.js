$(document).ready(function() {
  $("#wordForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("#textInput").val();

    var wordArray = userInput.split(" ");
    var prev = "";
    var a = [];
    var b = [];


    wordArray.sort();

    wordArray.forEach(function(word) {

      if(word !== prev) {
        a.push(word);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }

      prev = word;

    });

    for (i=0; i<a.length; i++) {
      $("#resultUL").append("<li>The word is " + a[i] + ", the count is " + b[i] + ".</li>");
    }

    $("#wordCount").text("Word Count: " + wordArray.length);
  });
});
