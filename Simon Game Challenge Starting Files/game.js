var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$("body").keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level)
        nextSequence();
        started = true;
    }
});

//Detectar o botão clicado pelo usuario.
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong")
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press any key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        
        startOver();
    }
}

//Sequencia de cores aleatórias que o usuario deve seguir.
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
//Função para tocar o som de cada cor.
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//Função para fazer piscar o botão selecionado
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}