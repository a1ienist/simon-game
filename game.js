const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];
let userClickedPattern = [];

let level = 0;

function nextSequence(max){

    userClickedPattern = [];

    $("h1").text("Level " + ++level);
   
    const randomNumber = Math.floor(Math.random() * max);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(name){
    const colorSound = new Audio("sounds/" + name + ".mp3");
    colorSound.play();   
}

function animatePress(currentColour){

    $("." + currentColour).addClass("pressed");
    setTimeout(() => {
        $("." + currentColour).removeClass("pressed"), 
        100});
    
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log('success');

        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function () {
                nextSequence(buttonColours.length);
              }, 1000);
        }
    }else{
        playSound('wrong');
        $("body").addClass('game-over');
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass('game-over');
          }, 200);

        $(document).keydown(()=>{
            nextSequence(buttonColours.length);
        })
    
        startOver();
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
}

$(document).keydown((event)=>{
    console.log(event)

    if(event.key === "a" && gamePattern.length === 0){
        nextSequence(buttonColours.length);
    }
    
})



$(".btn").on("click",(event)=>{

    const userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

    console.log(userClickedPattern.length-1);

})










