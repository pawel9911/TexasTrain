import '../scss/main.scss';
// import '../img';

document.addEventListener('DOMContentLoaded', function(){
    const backgroundImg = document.querySelector('.mainBox');
    backgroundImg.style.backgroundImage = 'url("../img/westernTown.jpg")';

    const bigTrains = document.querySelectorAll('.bigTrain');
    bigTrains.forEach((train)=> train.style.backgroundImage = 'url("../img/bigTrain.jpg")')

    const smallTrains = document.querySelectorAll('.smallTrain');
    smallTrains.forEach((train)=> train.style.backgroundImage = 'url("../img/smallTrain.jpg")')
 
    const shadowBox = document.querySelector(".shadowBox");
    const buttonStart = shadowBox.querySelector("button");
    const gameBox = document.querySelector(".gameBox")

    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        this.style.display = "none";
        gameBox.style.display = "flex";

    })
})