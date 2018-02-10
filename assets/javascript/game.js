$(document).ready(function () {
  var targetNumber = Math.floor((Math.random() * 100) + 20);



  $("#target-score").text(targetNumber);
  var counter = 0;
  var wins = 0;
  var losses = 0;

  $("#targetscore").html("Target score: " + targetNumber + "<br>" +
    "Your current score: " + counter + "<br>" +
    "Wins: " + wins + "<br>" +
    "Losses: " + losses)

  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var crystals = ["assets/green.png", "assets/pink.png", "assets/purple.png", "assets/blue.png"]

  var values = function () {
  for (var i = 0; i < crystals.length; i++) {
    var gem = $("<img>");
    gem.attr("src", crystals[i]);
    gem.addClass("gem-image");
    gem.attr("data-gemvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
    $("#gems").append(gem);

  }

  }
  values();

  var reset = function () {
    $("#gems").empty();
    counter = 0;
    targetNumber = Math.floor((Math.random() * 100) + 20);
    values();

    $("#targetscore").html("Target score: " + targetNumber + "<br>" +
        "Your current score: " + counter + "<br>" +
        "Wins: " + wins + "<br>" +
        "Losses: " + losses)
        
    
  }

  $("body").on("click", "img.gem-image", function () {

    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);

    counter += gemValue;

    $("#targetscore").html("Target score: " + targetNumber + "<br>" +
      "Your current score: " + counter + "<br>" +
      "Wins: " + wins + "<br>" +
      "Losses: " + losses)


    if (counter === targetNumber) {
      wins++;
      reset();
      alert("You win!");
      

    } else if (counter >= targetNumber) {
      losses++;
      reset();
      alert("You lose!!");

    }


  });
});