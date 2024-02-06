const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

let level = 0;


function nextSequence(max){
   
    const randomNumber = Math.floor(Math.random() * max);

    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    $("h1").text("Level " + level);
    level = level++;
    
}

function playSound(name){
    const colorSound = new Audio("sounds/" + name + ".mp3");
    colorSound.play();   
}

function animatePress(currentColour){

    $("." + currentColour).addClass("pressed");
    setTimeout(() => {
        $("." + currentColour).removeClass("pressed"), 
        1000});
    
       
}

$(document).on("keydown",(event)=>{

    if(event.key === "a"){
        nextSequence(4);
    }
    
})



$(".btn").on("click",(event)=>{
    const userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    console.log(userClickedPattern);
})










