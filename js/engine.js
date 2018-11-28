/*Variables we need for the game*/
var choices = ["rock", "paper", "scissors"];

/*The scores for the game*/

var won = 0;
var lost = 0;
var draw = 0;
var played = 0;

$("button").click(function(event) {
  var play_you = this.getAttribute("value");
  console.log(play_you);
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

/*Program of the game*/

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  return play_machine;
};

function compare(you, machine) {

  var verdict = 'lose';

  if (you == machine ) {
    verdict = 'draw';
  }

  else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }

  else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

/*Results function*/

  switch (verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;

    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;

    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }

    $("#verdict").text(verdict);
    played++;


    $("#game_played").text(played);

}



/*
  if ((you == "rock") && (machine == "scissors")) ||
  ((you == "rock") && (machine == "scissors")) ||
  ((you == "rock") && (machine == "scissors"))
  */
