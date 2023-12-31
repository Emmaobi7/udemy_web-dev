
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour)
});

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');

    setTimeout(function () {
        $('#' + currentColor).removeClass('pressed')
    }, 100)
}

var gameState = [];
$(document).keypress(function(event) {
    var start = event.key;
    gameState.push(start)
    if (gameState.length === 1) {
        nextSequence();
    }
})

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}


