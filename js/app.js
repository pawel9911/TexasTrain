import '../scss/main.scss';
// import ddd from "../img/westernTown.jpg";

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
        //1
        if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'smallTrain')){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'smallTrain')){
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //2
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange <= positionCowboyStartX)&&(leftChange>80)){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange <= positionCowboyStartX)&&(leftChange>80)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //3
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange<80)){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange<80)){
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //4
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange > positionCowboyStartX)){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange > positionCowboyStartX)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //5
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'bigTrain')){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'bigTrain')){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //6 
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange < positionCowboyStartX+40.125)){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange < positionCowboyStartX+40.125)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //7
        else if((e.keyCode == 32)&&(press === true)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange > positionCowboyStartX+40.125)){
            positionCowboyStartY -= 80;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange > positionCowboyStartX+40.125)){
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        press = false;
    }
    function keyUpHandler(e) {
        //1
        if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'smallTrain')){
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //2
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange <= positionCowboyStartX)&&(leftChange>80)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //3
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange<80)){
            positionCowboyStartY = 157;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //4
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'smallTrain')&&(allTrain[1].className === 'bigTrain')&&(leftChange > positionCowboyStartX)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //5
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'bigTrain')){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //6 
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange < positionCowboyStartX+40.125)){
            positionCowboyStartY = 87;
            cowboy.style.top = `${positionCowboyStartY}px`;
        }
        //7
        else if((e.keyCode == 32)&&(press === false)&&(allTrain[0].className === 'bigTrain')&&(allTrain[1].className === 'smallTrain')&&(leftChange > positionCowboyStartX+40.125)){
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
            // trainBox.appendChild(nextTrain);
            // allTrain.push(nextTrain);
            // allTrain.shift();
            allTrain = [...allTrain, nextTrain];
            allTrain.shift();
            // trainBox.firstElementChild.parentElement.removeChild(trainBox.firstElementChild);
            const tra = document.querySelector('.trainBox');
            tra.innerHTML = ''
            allTrain.forEach(el => {
            tra.appendChild(el)
         });

            //punkty i przyspieszenie
            score++;
            counterScore.innerText = `Score: ${score}`;


        }, 4000);

        const moveTrain = setInterval(() => {
            allTrain.forEach((tr)=>{
                tr.style.left = `-${leftChange}px`;
            })
            if(leftChange<250){
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

        // let inter = setInterval(()=>{
        //     console.log('witaj')
        // },500)
        // let time =setTimeout(()=>{
        //     clearInterval(inter)
        //     console.log('czyszczę')
        // },2010)

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);    
    })
})
