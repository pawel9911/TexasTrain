import '../scss/main.scss';
// import ddd from "../img/westernTown.jpg"

document.addEventListener('DOMContentLoaded', function(){
    // const backgroundImg = document.querySelector('.mainBox');
    // backgroundImg.style.backgroundImage = `url(${ddd})`;
 
    const shadowBox = document.querySelector(".shadowBox");
    const buttonStart = shadowBox.querySelector("button");
    const gameBox = document.querySelector(".gameBox")

    const optionsTrain = [document.querySelector('.smallTrain'), document.querySelector('.bigTrain')];



    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    let y = canvas.height-58;
    
    let dy = -2;
    const ballRadius = 10;
    let press = false;

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    function keyDownHandler(e) {
        if(e.keyCode == 32){
            press = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 32) {
            press = false;
        }
    }

    const jump  = () =>{
        ctx.beginPath();
        ctx.arc(133, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    const clearJump = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        jump();
        if((press == true) && (y >= 93)){
            y += dy;
        }
        else if((press == false) && (y <194)){
            y -= dy
        }
        // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        //     dy = -dy;
        // }
    }



















    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        this.style.display = "none";
        gameBox.style.display = "flex";
        setInterval(clearJump, 10)
        // let drawTrain = setInterval(() => {
        //     const indexTrain = Math.floor(Math.random()*2)
        //     const nextTrain = optionsTrain[indexTrain].cloneNode();
        //     console.log(gameBox.firstElementChild);
        //     gameBox.appendChild(nextTrain);
        //     gameBox.firstElementChild.parentElement.removeChild(gameBox.firstElementChild);
        // }, 4000);

    })

})