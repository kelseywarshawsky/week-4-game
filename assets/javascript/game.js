$(document).ready(function () { 
var targetNumber = 111;

$("#target-score").text(targetNumber);
var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystals = ["assets/pink.png", "assets/green.png", "assets/blue.png", "assets/purple.png"]

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

    $("#targetscore").text("Your current score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    } else if (counter >= targetNumber) {
      alert("You lose!!");
    }


  });
});
