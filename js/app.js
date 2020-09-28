import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function(){
    const backgroundImg = document.querySelector('.mainBox');
    backgroundImg.style.backgroundImage = 'url("../img/western-town.jpg")';

    const shadowBox = document.querySelector(".shadowBox");
    const buttonStart = shadowBox.querySelector("button");
    const gameBox = document.querySelector(".gameBox")

    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        this.style.display = "none";
        gameBox.style.display = "block";

    })
})