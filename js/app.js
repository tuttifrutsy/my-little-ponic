

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 350;

let frames = 0;
let currentFrame = 0;
let obstacles = [];
let apples = [];
let gameOver = false;

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
    this.img = new Image();
    this.img.src = "/assets/images/ponic-background-01.png";
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
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

// INSTANCIAS
let board = new Board();
let rainbowDash = new Rainbowdash(150, 270, 115 / 3, 45, 0, 0, 115 / 3, 42);
// let apple = new Apples(50, 50, 20, 20);

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


// setInterval(setDate, 1000);


// FUNCIONES AUXILIARES

function updateApples() {
  for (let i = 0; i < apples.length; i++) {
    apples[i].x += -1;
    apples[i].draw();
  }
  
  if (frames % 50 === 0) {
    let x = randomRange(0, canvas.width);
    let y = randomRange(0, canvas.height);
    apples.push(new Apples( x, y, 20, 20, true ));
  }
  //console.log(apples);
  
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

// PRINCIPALES

function start() {
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  if (frames % 7 === 0) {
    currentFrame = ++currentFrame % 3;
  }
  frames++;
  board.draw();
  rainbowDash.draw(); 
  updateApples();
}

window.addEventListener("keydown", e => {
  if (e.keyCode === 38 && rainbowDash.y > 20) {
    rainbowDash.y -= 1;
  }
  if (e.keyCode === 40 && rainbowDash.y < 550) {
    rainbowDash.y += 1;
  }
  if (e.keyCode === 39 && rainbowDash.x < 300) {
    rainbowDash.x += 7;
  }
  if (e.keyCode === 37 && rainbowDash.x > 20) {
    rainbowDash.x -= 7;
  }
});

start();



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