//INITIAL SETUP

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 600;

//VARIABLES 

let frames = 0;
let currentFrame = 0;
let apples = [];
let coins =[];
let bricks = [];
let keys =[];
let timeleft = 60;
var counter = 0;
var color = "";
let ponnys = [
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_002.png",
  "/Ponic/client/assets/imagesg",
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_001.png",
  "/Ponic/client/assets/images/poni_001.png"
];
let playerOne, playerTwo;
// let gameOver = false;


// EVENT LISTENERS


 window.addEventListener('keydown',function (e){
   keys =(keys || []);
   keys[e.keyCode] = (e.type == "keydown");
 })

 window.addEventListener('keyup', function(e){
   keys[e.keyCode] = (e.type == "keydown");
 })

window.alert("Oh, no¡ Sonic está en Equestria 🤔 o RainbowDash está en South Island. Descubrelo al final de la carrera¡¡");


// OBJECTS


// class Bricks {
//   constructor(x, y, w, h) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//   }
//   draw() {
//     ctx.fillStyle = generateRandomColor();
//     //this.x -= 2;
//     this.y += 1;
//     ctx.fillRect(this.x, this.y, this.w, this.h);
//   }
// }


class Bricks {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }
  draw() {
    ctx.fillStyle = this.color;
    //this.x -= 2;
    this.y +=4;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width +50;
    this.h = canvas.height+100;
    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/ponic-background-02.png";
    this.img.onload = this.draw();
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class PlayerOne {
  constructor(x, y, w, h, srcx, srcy, srcw, srch) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.srcx = srcx;
    this.srcy = srcy;
    this.srcw = srcw;
    this.srch = srch;

    this.img = new Image();
    this.img.src = "";
    this.img.onload = this.draw;

    this.gravity = 1;

    this.healt = 3;

    this.life = 1;

    this.counter = 0;
  }
  draw() {
    ctx.drawImage(
      this.img,
      currentFrame * (115 / 3),
      this.srcy,
      this.srcy,
      this.srcw,
      this.srch,
      this.x,
      this.y,
      this.h
    );
  }
  gravity() {
    this.y += gravity;
    this.x = 3;
  }
  checkAdds(apple) {
    return (
      this.x < apple.x + apple.w &&
      this.x + this.w > apple.x &&
      this.y < apple.y + apple.w &&
      this.y + this.w > apple.y
    );
  }
  checkDamage(coin) {
    return (
      this.x < coin.x + coin.w &&
      this.x + this.w > coin.x &&
      this.y < coin.y + coin.w &&
      this.y + this.w > coin.y
    );
  }
  checkPlayerTwo() {
    return (
      this.x < playerTwo.x + playerTwo.w &&
      this.x + playerTwo.w > playerTwo.x &&
      this.y < playerTwo.y + playerTwo.w &&
      this.y + this.w > playerTwo.y
    );
  }
  moveUp() {
    playerOne.y -= 1;
  }
  moveDown() {
    playerOne.y += 1;
  }
  moveLeft() {
    playerOne.x -= 3;
  }
  moveRight() {
    playerOne.x += 3;
  }
}


class PlayerTwo {
  constructor(x, y, w, h, srcx, srcy, srcw, srch) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.srcx = srcx;
    this.srcy = srcy;
    this.srcw = srcw;
    this.srch = srch;

    this.img = new Image();
    this.img.src = "";
    this.img.onload = this.draw;

    this.gravity = 1;

    this.healt = 3;

    this.life = 1;

    this.counter = 0;
  }
  draw() {
    ctx.drawImage(
      this.img,
      currentFrame * (
        
        
        73 / 2),
      this.srcy,
      this.srcy,
      this.srcw,
      this.srch,
      this.x,
      this.y,
      this.h
    );
  }
  gravity() {
    this.y += gravity;
    this.x = 3;
  }
  checkAdds(apple) {
    return (
      this.x < apple.x + apple.w &&
      this.x + this.w > apple.x &&
      this.y < apple.y + apple.w &&
      this.y + this.w > apple.y
    );
  }
  checkDamage(coin) {
    return (
      this.x < coin.x + coin.w &&
      this.x + this.w > coin.x &&
      this.y < coin.y + coin.w &&
      this.y + this.w > coin.y
    );
  }
  checkPlayerTwo() {
    return (
      this.x < playerTwo.x + playerTwo.w &&
      this.x + playerTwo.w > playerTwo.x &&
      this.y < playerTwo.y + playerTwo.w &&
      this.y + this.w > playerTwo.y
    );
  }
  moveUp() {
    playerOne.y -= 1;
  }
  moveDown() {
    playerOne.y += 1;
  }
  moveLeft() {
    playerOne.x -= 1;
  }
  moveRight() {
    playerOne.x += 1;
  }
}

class Rainbowdash {
  constructor(x, y, w, h, srcx, srcy, srcw, srch) {
    this.srcx = srcx;
    this.srcy = srcy;
    this.srcw = srcw;
    this.srch = srch;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/poni_001.png";
    this.img.onload = this.draw();

    this.gravity = 1;

    this.health = 3;
    this.life =1;

    this.counter = 0;
  }

  draw() {
    ctx.drawImage(
      this.img,
      currentFrame * (115 / 3),
      this.srcy,
      this.srcw,
      this.srch,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }
  gravity(){
    this.y += gravity
    this.x = 3
  }
  checkAdds(apple){
     return (this.x < apple.x + apple.w) &&
            (this.x + this.w > apple.x) &&
            (this.y < apple.y + apple.w)&&
            (this.y + this.w > apple.y)

  }
  checkDamage(coin){
    return (
      this.x < coin.x + coin.w &&
      this.x + this.w > coin.x &&
      this.y < coin.y + coin.w &&
      this.y + this.w > coin.y
    );
  }
  checkSonic(){
    return (
      this.x < sonic.x + sonic.w &&
      this.x + this.w > sonic.x &&
      this.y < sonic.y + sonic.w &&
      this.y + this.w > sonic.y
    );
  }
  moveUp(){
    rainbowDash.y -= 1;
  }
  moveDown(){
    rainbowDash.y += 1;
  }
  moveLeft(){
    rainbowDash.x -= 3;
  }
  moveRight(){
    rainbowDash.x += 3;
  }
}

class Sonic {
  constructor(x, y, w, h, srcx, srcy, srcw, srch) {
    this.srcx = srcx;
    this.srcy = srcy;
    this.srcw = srcw;
    this.srch = srch;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/sonic_002.png";
    this.img.onload = this.draw();

    this.health = 3;
    this.life = 1;

    this.counter = 0;
  }

  draw() {
    ctx.drawImage(
      this.img,
      currentFrame * (73 / 2),
      this.srcy,
      this.srcw,
      this.srch,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
  checkDamage(apple) {
    return (
      this.x < apple.x + apple.w &&
      this.x + this.w > apple.x &&
      this.y < apple.y + apple.w &&
      this.y + this.w > apple.y
    );
  }
  checkAdds(coin) {
    return (
      this.x < coin.x + coin.w &&
      this.x + this.w > coin.x &&
      this.y < coin.y + coin.w &&
      this.y + this.w > coin.y
    );
  }
  checkRainbowDash() {
    return (
      this.x < rainbowDash.x + rainbowDash.w &&
      this.x + this.w > rainbowDash.x &&
      this.y < rainbowDash.y + rainbowDash.w &&
      this.y + this.w > rainbowDash.y
    );
  }
  moveUp() {
    sonic.y -= 1;
  }
  moveDown() {
    sonic.y += 1;
  }
  moveLeft() {
    sonic.x -= 3;
  }
  moveRight() {
    sonic.x += 3;
  }
}

class Apples {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedY = 1;

    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/ponic-manzana-01.png";
    this.img.onload = this.draw();
  }
  draw() {
    if (this.y < canvas.height) {
      this.y += this.speedY;
    }
    ctx.drawImage(
      this.img, 
      this.x, 
      this.y, 
      this.w, 
      this.h);
  }
}

class Coin {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedY = 1;

    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/ponic-ring-002.png";
    this.img.onload = this.draw();

    
  }
  draw() {
    if (this.y < canvas.height) {
      this.y += this.speedY;
    }
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}


// IMPLEMENTATION

let board = new Board();
let rainbowDash = new Rainbowdash(110, 350, 115 / 3, 45, 0, 0, 115 / 3, 42);
let sonic = new Sonic(200, 350, 73/2, 45, 0, 0 , 73/2, 45);
let rainbowDashLife = document.querySelector('#life');
let rainbowDashPoints = document.querySelector('#points');
let sonicLife = document.querySelector('#life2');
let sonicPoints = document.querySelector('#points2');



// setInterval(setDate, 1000);


// ANIMATION LOOP

function generateRoad(){
  if(frames % 6 === 0){
 
    if (counter == 0) {
      color = "#F06292";
    } else if (counter  == 1) {
      color = "#BA68C8";
    } else if (counter == 2) {
      color = "#4FC3F7";
    } else if (counter == 3) {
      color = "#00FF33";
    } else if (counter  == 4) {
      color = "#FFEE58";
    } else if (counter == 5) {
      color = "#FFA726";
    } else if (counter == 6) {
      color = "#FF7043";
    
    } else {
      counter = -1;
    }
    
    counter++;
   
    bricks.push(new Bricks(280, 0, 20, 20, color)); 
    bricks.push(new Bricks(258, 0, 20, 20, color));
    bricks.push(new Bricks(236, 0, 20, 20, color));
    bricks.push(new Bricks(214, 0, 20, 20, color)); 
    bricks.push(new Bricks(192, 0, 20, 20, color)); 
    bricks.push(new Bricks(170, 0, 20, 20, color)); 
    bricks.push(new Bricks(148,  0, 20, 20, color));
    bricks.push(new Bricks(126,  0, 20, 20, color));  
    bricks.push(new Bricks(104, 0, 20, 20, color)); 
    bricks.push(new Bricks(82, 0, 20, 20, color)); 
    bricks.push(new Bricks(60, 0, 20, 20, color));   
  }
}

function drawBricks(){
  bricks.forEach(function(brick, i){
   brick.draw();
  })

  }

//  function generateRoad() {
//    if (frames % 12 === 0) {
//      bricks.push(new Bricks(280, 0, 10, 10));
//      bricks.push(new Bricks(269, 0, 10, 10));
//      bricks.push(new Bricks(258, 0, 10, 10));
//      bricks.push(new Bricks(247, 0, 10, 10));
//      bricks.push(new Bricks(236, 0, 10, 10));
//      bricks.push(new Bricks(225, 0, 10, 10));
    
//    }
//  }

//  function drawBricks() {
//    bricks.forEach(function(brick, i) {
//      brick.draw();
//    });
//  }



function updateCoins() {
  for (let i = 0; i < coins.length; i++) {
    //apples[i].x += -1;
  coins[i].draw();
  }
  
  if (frames % 50 === 0) {
    let x = randomRange(100, 200);
    let y = randomRange( 0, canvas.height);
    coins.push(new Coin( x, y, 20, 20, true ));
  }
 }

function updateApples() {
  for (let i = 0; i < apples.length; i++) {
    //apples[i].x += -1;
    apples[i].draw();
  }
  
  if (frames % 50 === 0) {
    let x = randomRange(100, 200);
    let y = randomRange( 0, canvas.height);
    apples.push(new Apples( x, y, 20, 20, true ));
  }
  //console.log(apples);
}

function updateRocks() {
  for (let i = 0; i < rocks.length; i++) {
    //apples[i].x += -1;
    rocks[i].draw();
  }

  if (frames % 90 === 0) {
    let x = randomRange(150, 200);
    let y = randomRange(100, canvas.height);
    rocks.push(new Rocks(x, y, 20, 20, true));
  }
}

function updateTrees(){

  for(let i = 0; i < trees.length; i ++){
    
    trees[i].draw();
  }
  if (frames % 120 === 0 ){
   

    let height = randomRange(50, 90);
    let widht = randomRange( 30, 60);

    let x = randomRange(0, 10);
    let y = randomRange(100, 200);

    trees.push(new Trees(x, y, widht, height, true ));
    trees.push(new Trees(340,80, widht,height,true));
   
  }
}


function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

// PRINCIPALES

function start() {
  interval = setInterval(updateGame, 1000 / 60);
}

function gameOver(player1, player2){
  if(player1.health === 0 && player2.health === 0){
    clearInterval(interval);
  }
  if (timeleft <= 0){
    clearInterval(interval);
  }
}

function updateGame() {
    
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 
  if (frames % 8 === 0) {
    currentFrame = ++currentFrame % 2;
  }
if (keys && keys[38] && rainbowDash.y > 20) {
    rainbowDash.moveUp();
  }
  if (keys && keys[87] && sonic.y > 20) {
    sonic.moveUp();
  }
  if (keys && keys[40] && rainbowDash.y < 550) {
  rainbowDash.moveDown();
  }
  if (keys && keys[83] && sonic.y < 550) {
    sonic.moveDown();
  }
  if (keys && keys[39] && rainbowDash.x < 300) {
    rainbowDash.moveRight();
  }
  if (keys && keys[68] && sonic.x < 300) {
    sonic.moveRight();
  }
  if (keys && keys[37] && rainbowDash.x > 20) {
     rainbowDash.moveLeft();
  }
  if (keys && keys[65] && sonic.x > 20) {
    sonic.moveLeft();
  }
  generateRoad();
  drawBricks();

  if(rainbowDash.health >= 1 ){
    rainbowDash.draw();
    checkCollitionRainbowDash();
    
  }
  if(sonic.health >= 1 ){
    sonic.draw();
    checkCollitionSonic();
  }  
  frames++;

  updateApples();
 
updateCoins();
 gameOver(sonic, rainbowDash);

}
start();


// SOUND EFECTS

let fxCoin = new Audio("/Ponic/client/assets/sound/MSN_RING.wav");
let fxApple = new Audio ("/Ponic/client/assets/sound/MSN_FRUIT.wav");
let fxDamage = new Audio ("/Ponic/client/assets/sound/FE_MOVE.wav");


//UTILITY FUNCTIONS


function checkCollitionSonic() {
  coins.forEach((coin, ci) => {
    if (sonic.checkAdds(coin)) {
      coins.splice(ci, 1);
      sonic.counter++;
      sonicPoints.textContent = sonic.counter;
      //console.log(sonic.counter, 'Sonic');
      fxCoin.play();
    }
     apples.forEach((apple, ai) => {
      if (sonic.checkDamage(apple)) {
        apples.splice(ai, 1);
        sonic.health--;
        sonicLife.textContent = sonic.health;
        //console.log(sonic.health, 'Sonic');
        fxDamage.play();
      }
    });
  });
}


function checkCollitionRainbowDash(){
  apples.forEach((apple, ai)=>{
    if (rainbowDash.checkAdds(apple)) {
      apples.splice(ai,1);
      rainbowDash.counter ++;
      rainbowDashPoints.textContent = rainbowDash.counter;
      //console.log(rainbowDash.counter);
       fxApple.play();
   }
   coins.forEach((coin, ci)=>{
     if (rainbowDash.checkDamage(coin)) {
       coins.splice(ci,1);
       rainbowDash.health --;
       rainbowDashLife.textContent = rainbowDash.health;
       //console.log(rainbowDash.health);
       fxDamage.play();
     }
   })
 });
}



let downloadTimer = setInterval(function() {
  document.getElementById("countdown").innerHTML =
    timeleft;
    document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
  if (timeleft <= 0 || sonic.health == 0 && rainbowDash.health == 0)  {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Ha terminado la Carrera";
  
  }
}, 1000);


// function generateRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

 

