import '../scss/main.scss';
// import ddd from "../img/westernTown.jpg"

document.addEventListener('DOMContentLoaded', function(){
    // const backgroundImg = document.querySelector('.mainBox');
    // backgroundImg.style.backgroundImage = `url(${ddd})`;
 
    const shadowBox = document.querySelector(".shadowBox");
    const buttonStart = shadowBox.querySelector("button");
    const gameBox = document.querySelector(".gameBox")

    const optionsTrain = [document.querySelector('.smallTrain'), document.querySelector('.bigTrain')];



    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-58;
    var dy = -2;
    const jump  = () =>{
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    const clearJump = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        jump();
        y += dy;
    }
    const falldown = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        jump();
        y -= dy;
    }
    canvas.addEventListener('mouseover', clearJump);
    canvas.addEventListener('mouseout', falldown);


















    

    buttonStart.addEventListener("click", function(){
        shadowBox.style.display = "none";
        this.style.display = "none";
        gameBox.style.display = "flex";

        // let drawTrain = setInterval(() => {
        //     const indexTrain = Math.floor(Math.random()*2)
        //     const nextTrain = optionsTrain[indexTrain].cloneNode();
        //     console.log(gameBox.firstElementChild);
        //     gameBox.appendChild(nextTrain);
        //     gameBox.firstElementChild.parentElement.removeChild(gameBox.firstElementChild);
        // }, 4000);

    })

})