import '../scss/main.scss';
// import ddd from "../img/westernTown.jpg";
// import bigImg from '../img/bigTrain.jpg';

document.addEventListener('DOMContentLoaded', function(){
    // const backgroundImg = document.querySelector('.mainBox');
    // backgroundImg.style.backgroundImage = `url(${ddd})`;
 
    const shadowBox = document.querySelector(".shadowBox");
    const buttonStart = shadowBox.querySelector("button");
    const gameBox = document.querySelector(".gameBox");
    const trainBox = document.querySelector('.train');
    const cowboy = document.querySelector('.cowboy');
    const optionsTrain = [document.querySelector('.smallTrain'), document.querySelector('.bigTrain')];
    const allTrain = [...document.querySelector('.train').children];
    let leftChange = 0;

    const positionCowboyStartX = 113;
    let positionCowboyStartY = 157;


    function keyDownHandler(e) {
        if((e.keyCode == 32)&&(positionCowboyStartY>90)){//warunek zeby uciekało tylko do danej odleglosci
            positionCowboyStartY -= 70;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 32) {
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
    }

    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        gameBox.style.display = "flex";

        const addTrain = setInterval(() => {
            const indexTrain = Math.floor(Math.random()*2)
            const nextTrain = optionsTrain[indexTrain].cloneNode();
            trainBox.appendChild(nextTrain);
            allTrain.push(nextTrain);
            trainBox.firstElementChild.parentElement.removeChild(trainBox.firstElementChild);
        }, 4000);

        const moveTrain = setInterval(() => {
            allTrain.forEach((tr)=>{
                tr.style.left = `${leftChange}px`;
            })
            if(leftChange>=-250){
                leftChange-=0.625;
            }
            else{leftChange = 0}
        }, 10)

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);


    })

})