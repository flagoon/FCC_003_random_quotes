$(document).ready(function () {
  var link = "";
  
  function getTwitter(link) {
    if (link.length < 178) {
      $("#twitterLink").attr("href", link);
    } else {
      $("#twitterLink").addClass("disabled");
      $("#twitterLink").attr("href", "#");
    }
  }
  
  function getQuote() {
    $("#twitterLink").removeClass("disabled");
    $.getJSON("quotes.json", function(json) {
      var test = JSON.stringify(json[Math.floor(Math.random() * 100)]);
      var regEx = /"/g;
      var newTest = test.replace(regEx, "");
      newTest = newTest.split("-");
      $("#quote").text(newTest[0]);
      $("#movie").text(newTest[1]);
      link = "https://twitter.com/intent/tweet?text=" + newTest[0].split(" ").join("%20");
      getTwitter(link);
    });
  }

  getQuote();

  getTwitter(link);
  $("#next-quote").on("click", getQuote);

  $("#twitter").on("click", getTwitter(link));
});













 