$(document).ready(function () { 
var targetNumber = 111;

$("#target-score").text(targetNumber);
var counter = 0;
var wins = 0;
var losses=0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystals = ["assets/green.png", "assets/pink.png", "assets/purple.png", "assets/blue.png"]

for (var i = 0; i < crystals.length; i++) {
    var gem= $("<img>"); 
    gem.attr("src", crystals[i]);
    gem.addClass("gem-image");
    gem.attr("data-gemvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
    $("#gems").append(gem);

}

  $(".gem-image").on("click", function () {
    
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);

    counter += gemValue;

    $("#targetscore").html("Your current score: " + counter + "<br>" +
                            "Wins: " + wins + "<br>" +
                            "Losses: " + losses)


    if (counter === targetNumber) {
      wins++;
      counter = 0;
      alert("You win!");
      $("#targetscore").html("Your current score: " + counter + "<br>" +
      "Wins: " + wins + "<br>" +
      "Losses: " + losses)
    } else if (counter >= targetNumber) {
      losses++;
      counter = 0; 
      alert("You lose!!");
      $("#targetscore").html("Your current score: " + counter + "<br>" +
      "Wins: " + wins + "<br>" +
      "Losses: " + losses)
    }


  });
});
