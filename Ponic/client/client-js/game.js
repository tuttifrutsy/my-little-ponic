// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// canvas.width = 250;
// canvas.height = 500;

// let frames = 0;
// let currentFrame = 0;
// let obstacles = [];
// let apples = [];
// let gameOver = false;

// class Board {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     this.w = canvas.width;
//     this.h = canvas.height;
//     this.img = new Image();
//     this.img.src = "../assets/images/bkgsc.JPG";
//     this.img.onload = this.draw();
//   }

//   draw() {
//     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//   }
// }

// class Rainbowdash {
//   constructor(x, y, w, h, srcx, srcy, srcw, srch) {
//     this.srcx = srcx;
//     this.srcy = srcy;
//     this.srcw = srcw;
//     this.srch = srch;

//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;

//     this.speedX = 0;
//     this.speedY = 0;

//     this.img = new Image();
//     this.img.src = "../assets/images/poni_001.png";
//     this.img.onload = this.draw();
//     this.newPos = function() {
//       this.x += this.speedX;
//       this.y += this.speedY;
//     };
//   }

//   draw() {
//     ctx.drawImage(
//       this.img,
//       currentFrame * (115 / 3),
//       this.srcy,
//       this.srcw,
//       this.srch,
//       this.x,
//       this.y,
//       this.w,
//       this.h
//     );
//   }
// }

// let board = new Board();
// let rainbowDash = new Rainbowdash(150, 550, 115 / 3, 45, 0, 0, 115 / 3, 42);

// function start() {
//   interval = setInterval(updateGame, 1000 / 60);
// }

// function updateGame() {
//   if (frames % 7 === 0) {
//     currentFrame = ++currentFrame % 3;
//   }
//   frames++;
//   // board.draw();
//   rainbowDash.draw();
//   // rainbowDash.newPos();
// }



// window.addEventListener('keydown')
// start();
