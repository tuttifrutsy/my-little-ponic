//INITIAL SETUP

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 350;

//VARIABLES 

let frames = 0;
let currentFrame = 0;
let apples = [];
let trees = [];
let coins =[];

let gameOver = false;


// EVENT LISTENERS


window.addEventListener("keydown", e => {
  if (e.keyCode === 38 && rainbowDash.y > 20) {
    rainbowDash.y -= 1;
  }
  if (e.keyCode === 87 && sonic.y > 20) {
    sonic.y -= 1;
  }
  if (e.keyCode === 40 && rainbowDash.y < 550) {
    rainbowDash.y += 1;
  }
  if (e.keyCode === 88 && sonic.y < 550) {
    sonic.y += 1;
  }
  if (e.keyCode === 39 && rainbowDash.x < 300) {
    rainbowDash.x += 7;
  }
  if (e.keyCode === 68 && sonic.x < 300) {
    sonic.x += 7;
  }
  if (e.keyCode === 37 && rainbowDash.x > 20) {
    rainbowDash.x -= 7;
  }
  if (e.keyCode === 65 && sonic.x > 20) {
    sonic.x -= 7;
  }
});



// OBJECTS

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
    this.img = new Image();
    this.img.src = "/assets/images/ponic-background-02.png";
    this.img.onload = this.draw();
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
    this.img.src = "./assets/images/poni_001.png";
    this.img.onload = this.draw();

    this.gravity = 1;

    this.health = 3;

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
    this.img.src = "/assets/images/sonic_002.png";
    this.img.onload = this.draw();

    this.health = 3;

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
}

class Apples {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedY = 1;

    this.img = new Image();
    this.img.src = "./assets/images/ponic-manzana-01.png";
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
    this.img.src = "./assets/images/ponic-manzana-01.png";
    this.img.onload = this.draw();
  }
  draw() {
    if (this.y < canvas.height) {
      this.y += this.speedY;
    }
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

class Trees {
  constructor(x, y, w, h, isTop){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.gravity = 3;
    
    this.img = new Image();
    this.img.src = isTop? './assets/images/tree1.png' : './assets/images/tree2.png';
    this.img.onload = this.draw();
  }
  draw(){
    if (this.y < canvas.height) {
      this.y += this.gravity;
    }
   ctx.drawImage(
     this.img, 
     this.x, 
     this.y, 
     this.w, 
     this.h);
  }
}

// IMPLEMENTATION

let board = new Board();
let rainbowDash = new Rainbowdash(150, 270, 115 / 3, 45, 0, 0, 115 / 3, 42);
let sonic = new Sonic(200, 270, 73/2, 45, 0, 0 , 73/2, 45);
// let apple = new Apples(50, 50, 20, 20);

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


// setInterval(setDate, 1000);


// ANIMATION LOOP

function updateApples() {
  for (let i = 0; i < apples.length; i++) {
    //apples[i].x += -1;
    apples[i].draw();
  }
  
  if (frames % 50 === 0) {
    let x = randomRange(100, 200);
    let y = randomRange( 50, canvas.height);
    apples.push(new Apples( x, y, 20, 20, true ));
  }
  //console.log(apples);
  
}

function updateTrees(){

  for(let i = 0; i < trees.length; i ++){
    
    trees[i].draw();
  }
  if (frames % 100 === 0){
   

    let height = randomRange(50, 100);
    let widht = randomRange( 30, 60);

    let x = randomRange(10, 50);
    let y = randomRange(10, canvas.height);

    trees.push(new Trees(x, y, widht, height, true ));
   
  }
}


function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

// PRINCIPALES

function start() {
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  if (frames % 8 === 0) {
    currentFrame = ++currentFrame % 2;
  }
  // if(rainbowDash.y < canvas.height -50){
  //   rainbowDash.gravity();
  // }
  frames++;
  board.draw();
  rainbowDash.draw(); 
  sonic.draw();
  //updateApples();
  updateTrees();
  //checkCollition();
  // checkCollitionAdd(apples, rainbowDash);
  // checkCollitionAdd(coins, sonic);
  // checkCollitionTakeOff(apples, sonic);
  // checkCollitionTakeOff(apples, sonic);
  //console.log(getDistance(rainbowDash.x, Apples.y));
  
}
start();

//UTILITY FUNCTIONS







function checkCollitionAdd(points, player){
  points.forEach((point, pi) => {
    if(player.checkAdds(point)){
      points.splice(pi,1);
      player.counter ++;
      //console.log(player.counter);
    }
  })
}

function checkCollitionTakeOff(dangers, player){
  dangers.forEach((danger, di)=>{
    if(player.checkDamage(danger)){
      dangers.splice(di, 1);
      player.health --;
      console.log(player.health);
    }
  })
}


// function checkCollition(){
//   apples.forEach((apple, ai)=>{
//     if (rainbowDash.checkApples(apple)) {
//       apples.splice(ai,1);
//       rainbowDash.counter ++;
//       console.log(rainbowDash.counter);
//    }
//    coins.forEach((coin, ci)=>{
//      if (rainbowDash.checkCoins(coin)) {
//        coin.splice(ci,1);
//        rainbowDash.health --;
//        console.log(rainbowDash.health);
//      }
//    })
//  });
// }

function setDate() {
  //console.log('Hi');
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = (mins / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}