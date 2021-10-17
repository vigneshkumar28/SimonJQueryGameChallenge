// alert("hello");

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var gamePattern = [];

var level = 0;
var started = false;

function nextSequence(){

    //reset the value 
    userClickedPattern = [];

    level = level + 1;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4); //0,1,2,3
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // $('document').on('load', function(){
        // new Audio('sounds/blue.mp3').play();
        // audio.play(); +randomChosenColour+'.mp3'
    // });
    // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    // audio.play();
    playSound(randomChosenColour);
    // animatePress(randomChosenColour);
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});

$('.btn').click(function(){
    // console.log(event.target.id);

    // instead of document use .btn and $(this).attr("id");
    // var userChosenColour = event.target.id;
    // console.log($(this).attr("id"));
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    // console.log(userClickedPattern);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // nextSequence();

    checkAnswer(userClickedPattern.length -1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout( function () {
                nextSequence();
            }, 1000);  
        }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        new Audio("sounds/wrong.mp3").play();

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

// --- not changeable below function

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    // $("#"+currentColour).fadeIn(100).addClass("pressed").fadeOut(100).fadeIn(100).addClass(currentColour);

    //forget this while first time
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}