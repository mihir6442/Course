let buttonColours = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keydown(function(){
    if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;    
    }
});
    $(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1);
    });


    

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
   
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout( function () {
        $("#" + currentColour).removeClass("pressed");
    },200)
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");}
    if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);}
     else {
          console.log("wrong");
          playSound("wrong")
          $("body").addClass("game-over")
            setTimeout( function () {
          $("body").removeClass("game-over");
            },200);
          $("#level-title").text("Game Over, Press Any Key to Restart");
          startOver();
        }
    
    }
    
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}

