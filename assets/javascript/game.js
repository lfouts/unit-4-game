$(document).ready(function() {
  var wins= 0;
  var losses= 0;
  var totalScore;
  var crystals;
  var targetNumber;
   function reset() {
      totalScore = 0;
      crystals = {
        blue_crystal: Math.floor((Math.random() * 12) + 1),
        white_crystal: Math.floor((Math.random() * 12) + 1),
        violet_crystal: Math.floor((Math.random() * 12) + 1),
        purple_crystal: Math.floor((Math.random() * 12) + 1),
      };
      console.log(crystals);
      targetNumber = Math.floor((Math.random() * 120) + 19);
      $("#targetNumber").text(targetNumber);
      console.log(targetNumber);
      $("#totalScore").text(totalScore);
    }

    reset();
      $("a").on('click', function() {
        totalScore = totalScore + crystals[this.id];
        $("#totalScore").text(totalScore);
        console.log(this.id);
        console.log(totalScore);
        if (totalScore === targetNumber) {
          alert("You win!");
          wins++;
          $("#wins").text(wins);
          reset();
        }
        if (totalScore > targetNumber) {
          alert("You lose!");
          losses++;
          $("#losses").text(losses);
          reset();
        }

      });

  });
