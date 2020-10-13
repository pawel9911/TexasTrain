import '../scss/main.scss';
// import ddd from "../img/westernTown.jpg";
// import bigImg from '../img/bigTrain.jpg';

document.addEventListener('DOMContentLoaded', function(){
    // const backgroundImg = document.querySelector('.mainBox');
    // backgroundImg.style.backgroundImage = `url(${ddd})`;
 
    const shadowBox = document.querySelector(".shadowBox");
    const gameBox = document.querySelector(".gameBox");
    const trainBox = document.querySelector('.trainBox');
    const buttonStart = shadowBox.querySelector("button");
    const cowboy = document.querySelector('.cowboy');

    const optionsTrain = [document.querySelector('.smallTrain'), document.querySelector('.bigTrain')];
    let allTrain = [...document.querySelector('.trainBox').children];
    
    let leftChange = 0;
    const positionCowboyStartX = 113;
    let positionCowboyStartY = 157;

    let score = 0;
    const counterScore = document.querySelector('.score');

    let press = true;
    
    function keyDownHandler(e) {
        if((e.keyCode == 32)&&(press === true)){//warunek zeby uciekało tylko do danej odleglosci
            positionCowboyStartY -= 70;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(allTrain[1].className === 'bigTrain')&&((press === true)||(press === false))) {
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if ((e.keyCode == 32)&&(allTrain[1].className === 'smallTrain')&&(press ===false)) {
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        press = false;
    }
    function keyUpHandler(e) {
        if((e.keyCode == 32)&&(allTrain[1].className === 'bigTrain')&&(press === false)) {
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if ((e.keyCode == 32)&&(allTrain[0].className === 'bigTrain')&&(press === false)) {
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else{
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        press = true;
    }

    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        gameBox.style.display = "flex";

        const addTrain = setInterval(() => {
            const indexTrain = Math.floor(Math.random()*2)
            const nextTrain = optionsTrain[indexTrain].cloneNode();
            trainBox.appendChild(nextTrain);
            allTrain.push(nextTrain);
            allTrain.shift();
            score++;
            counterScore.innerText = `Score: ${score}`;
            trainBox.firstElementChild.parentElement.removeChild(trainBox.firstElementChild);
        }, 4000);

        const moveTrain = setInterval(() => {
            allTrain.forEach((tr)=>{
                tr.style.left = `-${leftChange}px`;
            })
            if(leftChange<=250){
                leftChange+=0.625;
             }
            else{
                leftChange = 0
            }
            if((`${-positionCowboyStartX-0.125}px` === allTrain[1].style.left)&&(positionCowboyStartY>90)&&(allTrain[1].className === 'bigTrain')){
                clearInterval(moveTrain);
                clearInterval(addTrain);
                leftChange = 0;
                score = 0;
                counterScore.innerText = `Score: ${score}`
                shadowBox.style.display = "flex";
                gameBox.style.display = "none";
                alert('Game Over');
            }
            else if ((allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(allTrain[0].style.left === `${-positionCowboyStartX-40.125}px`)){
                positionCowboyStartY = 157;
                cowboy.style.top = `${positionCowboyStartY}px`;
            }
        }, 10)

        let inter = setInterval(()=>{
            console.log('witaj')
        },500)
        let time =setTimeout(()=>{
            clearInterval(inter)
            console.log('czyszczę')
        },2010)

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);

        
    })

})