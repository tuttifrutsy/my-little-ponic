

//INITIAL SETUP


  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 350;
  canvas.height = 400;

  //VARIABLES

  let frames = 0;
  let currentFrame = 0;
  let apples = [];
  let coins = [];
  let bricks = [];
  let keys = [];
  let timeleft = 60;
  let counter = 0;
  let color ="";
  let backgrounds = [
    '/Ponic/client/assets/images/bg-01.jpg',
    '/Ponic/client/assets/images/bg-02.png',
    '/Ponic/client/assets/images/bg-03.jpg',
    '/Ponic/client/assets/images/bg-04.png',

    '/Ponic/client/assets/images/bg-06.png',
    '/Ponic/client/assets/images/bg-07.jpg'
  ];
  let obstacles = [];
  let winner;

 
 
  // let gameOver = false;

  // EVENT LISTENERS

  window.addEventListener("keydown", function(e) {
    keys = keys || [];
    keys[e.keyCode] = e.type == "keydown";
  });

  window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = e.type == "keydown";
  });

  

class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height;
    this.img = new Image();
    this.img.src = "/Ponic/client/assets/images/stars-bg.jpg";
    this.img.onload = this.draw();
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

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
      this.y += 4;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
  }

  


  //LocalStorage

  let dataCharacter = JSON.parse(localStorage.getItem("character"));
  let dataCharacterSonic = JSON.parse(localStorage.getItem("sonics"));

  // console.log( dataCharacter) ;
   
  

  class PlayerOne {
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
      this.img.src = dataCharacter.image1;
      this.img.onload = this.draw();

      this.gravity = 1;

      this.health = 3;
      this.life = 1;
      this.isAlive = true;
      this.counter = 0;
    }

    draw() {
      ctx.drawImage(
        this.img,
        currentFrame * (144 / 3),
        this.srcy,
        this.srcw,
        this.srch,
        this.x,
        this.y,
        this.w,
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
    checkObstacles(obstacle) {
      return (
        this.x < obstacle.x + obstacle.w &&
        this.x + this.w > obstacle.x &&
        this.y < obstacle.y + obstacle.w &&
        this.y + this.w > obstacle.y
      );
    }
    moveUp() {
      playerOne.y -= 0.3;
      this.img.src = dataCharacter.image1;
    }
    moveDown() {
      playerOne.y += 0.3;
      this.img.src = dataCharacter.image2;
    }
    moveLeft() {
      playerOne.x -= 1.5;
      this.img.src = dataCharacter.image4;
    }
    moveRight() {
      playerOne.x += 1.5;
      this.img.src = dataCharacter.image3;
    }
    stopMove() {
      
    }
    iAmDead(){
      this.img.src = "/Ponic/client/assets/images/ghost-blue.png"
    }
  }

  class PlayerTwo {
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
      this.img.src = dataCharacterSonic.image1;
      this.img.onload = this.draw();

      this.health = 3;
      this.life = 1;

      this.angle = 0;
      this.speed = 0 ;
      this.counter = 0;
      this.moveAngle = 0;
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
    checkPlayerOne() {
      return (
        this.x < playerOne.x + playerOne.w &&
        this.x + this.w > playerOne.x &&
        this.y < playerOne.y + playerOne.w &&
        this.y + this.w > playerOne.ystopMove()
      );
    }
    checkObstacles(obstacle) {
      return (
        this.x < obstacle.x + obstacle.w &&
        this.x + this.w > obstacle.x &&
        this.y < obstacle.y + obstacle.w &&
        this.y + this.w > obstacle.y
      );
    }
    moveUp() {
      playerTwo.y -= 0.3;
    }
    moveDown() {
      playerTwo.y += 0.3;
    }
    moveLeft() {
      playerTwo.x -= 1.5;
    }
    moveRight() {
      playerTwo.x += 1.5;
    }
    jump() {
      
    }
    stopMove(){
      playerOne.x = 0;
      playerOne.y = 0;
    }
    iAmDead(){
      this.img.src ="/Ponic/client/assets/images/ghost-red.png"
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
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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


  class Obstacle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.speedY = 1;

      this.img = new Image();
      this.img.src = "/Ponic/client/assets/images/hole.png";
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
    
    let playerOne = new PlayerOne(110, 350, 144 / 3, 48, 0, 0, 144 / 3, 48);
    let playerTwo = new PlayerTwo(200, 350, 73 / 2, 45, 0, 0, 73 / 2, 45);
    let playerOneLife = document.querySelector("#life");
    let playerOnePoints = document.querySelector("#points");
    let playerTwoLife = document.querySelector("#life2");
    let playerTwoPoints = document.querySelector("#points2");



    // ANIMATION LOOP

    function generateRoad() {
      if (frames % 8 === 0) {
        if (counter == 0) {
          color = "#F06292";
        } else if (counter == 1) {
          color = "#BA68C8";
        } else if (counter == 2) {
          color = "#4FC3F7";
        } else if (counter == 3) {
          color = "#00FF33";
        } else if (counter == 4) {
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
        bricks.push(new Bricks(148, 0, 20, 20, color));
        bricks.push(new Bricks(126, 0, 20, 20, color));
        bricks.push(new Bricks(104, 0, 20, 20, color));
        bricks.push(new Bricks(82, 0, 20, 20, color));
        bricks.push(new Bricks(60, 0, 20, 20, color));

       
      }
    }

    function drawBricks() {
      bricks.forEach(function(brick, i) {
        brick.draw();
      });
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
        let x = randomRange(60, 250);
        let y = randomRange(0, canvas.height);
        coins.push(new Coin(x, y, 20, 20, true));
      }
    }

    function updateApples() {
      for (let i = 0; i < apples.length; i++) {
        //apples[i].x += -1;
        apples[i].draw();
      }

      if (frames % 50 === 0) {
        let x = randomRange(60, 250);
        let y = randomRange(0, canvas.height);
        apples.push(new Apples(x, y, 20, 20, true));
      }
      //console.log(apples);
    }

    function generateObstacles() {
      for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
      }

      if (frames % 90 === 0) {
        let x = randomRange(60, 280);
        let y = randomRange(0, canvas.height);
        obstacles.push(new Obstacle(x, y, 30, 30, true));
      }
    }
    
    // PRINCIPAL
    
    function start() {
      interval = setInterval(updateGame, 1000 / 60);
    }
    
    function gameOver(player1, player2) {
      if (player1.health === 0 && player2.health === 0) {
        clearInterval(interval);
        winnerIs();
      }
      if (timeleft <= 0) {
        clearInterval(interval);
        
      }
    }
    
    function updateGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (frames % 12 === 0) {
        currentFrame = ++currentFrame % 2;
      }
      if (keys && keys[87] && playerOne.y > 50) {
        playerOne.moveUp();
       
      }
      if (keys && keys[38] && playerTwo.y > 50) {
        playerTwo.moveUp();
      }
      if (keys && keys[83] && playerOne.y < 550) {
       playerOne.moveDown();

      }
      if (keys && keys[40] && playerTwo.y < 550) {
        playerTwo.moveDown();
      }
      if (keys && keys[68] && playerOne.x < 280) {
        playerOne.moveRight();
       
      }
      if (keys && keys[39] && playerTwo.x < 280) {
        playerTwo.moveRight();
      }
      if (keys && keys[65] && playerOne.x > 50) {
        playerOne.moveLeft();
        
      }
      if (keys && keys[37] && playerTwo.x > 50) {
        playerTwo.moveLeft();
      }
      generateRoad();
      drawBricks();
      
      if (playerOne.health >= 1) {
        playerOne.draw();
        checkCollitionPlayerOne();
        
        
      }
      if (playerTwo.health >= 1) {
        playerTwo.draw();
        checkCollitionPlayerTwo();
      }
      frames++;
      
      updateApples();
      generateObstacles();
      updateCoins();
      gameOver(playerOne, playerTwo);
      
    }
    start();
    
    // SOUND EFECTS
    
    let fxCoin = new Audio("/Ponic/client/assets/sound/MSN_RING.wav");
    let fxApple = new Audio("/Ponic/client/assets/sound/MSN_FRUIT.wav");
    let fxDamage = new Audio("/Ponic/client/assets/sound/FE_MOVE.wav");
    let fxDead = new Audio("/Ponic/client/assets/sound/pacman_death.wav");
    
    //UTILITY FUNCTIONS
    
    function checkCollitionPlayerTwo() {
      coins.forEach((coin, ci) => {
        if (playerTwo.checkAdds(coin)) {
          coins.splice(ci, 1);
          playerTwo.counter++;
          playerTwoPoints.textContent = playerTwo.counter;
          //console.log(sonic.counter, 'Sonic');
          fxCoin.play();
        }
        apples.forEach((apple, ai) => {
          if (playerTwo.checkDamage(apple)) {
            apples.splice(ai, 1);
            playerTwo.health--;
            playerTwoLife.textContent = playerTwo.health;
            //console.log(sonic.health, 'Sonic');
            fxDamage.play();
          }
          obstacles.forEach((obstacle, oi) => {
            if (playerTwo.checkObstacles(obstacle)) {
              obstacles.splice(oi, 1);
              playerTwo.health = 0;
              playerTwoLife.textContent = playerTwo.health;
              playerTwo.iAmDead();
              fxDead.play();
            }
          });
        });
      });
    }
    
    function checkCollitionPlayerOne() {
      apples.forEach((apple, ai) => {
        if (playerOne.checkAdds(apple)) {
          apples.splice(ai, 1);
          playerOne.counter++;
          playerOnePoints.textContent = playerOne.counter;
          //console.log(rainbowDash.counter);
          fxApple.play();
        }
        coins.forEach((coin, ci) => {
          if (playerOne.checkDamage(coin)) {
            coins.splice(ci, 1);
            playerOne.health--;
            playerOneLife.textContent = playerOne.health;
            //console.log(rainbowDash.health);
            fxDamage.play();
          }
          obstacles.forEach((obstacle, oi)=>{
            if(playerOne.checkObstacles(obstacle)){
              obstacles.splice(oi, 1);
              playerOne.health = 0;
              playerOneLife.textContent = playerOne.health;
              
              fxDead.play();
            }
           
          })
        });
      });
    }


    
    function winnerIs(){
      if(playerOne.counter > playerTwo.counter){
        winner = playerOne;
        document.getElementById("runnerWin").style.visibility='visible';
        document.getElementById("canvas").style.visibility = "hidden";
        //console.log(winner);
      }
      else if(playerTwo.counter > playerOne.counter){
        winner = playerTwo;
        document.getElementById("runnerWinTwo").style.visibility= 'visible';
        document.getElementById("canvas").style.visibility = "hidden";
        //console.log(winner);
      }
      else if (playerOne.counter == playerTwo.counter){
        document.getElementById("empate").style.visibility ="visible";
        document.getElementById("canvas").style.visibility = "hidden";
      }
    }
    
    
    let namePlayerOne = document.querySelector("#runnerOne");
    namePlayerOne.textContent = dataCharacter.name;
    document.getElementById("logoRunner1").src = dataCharacter.logo;
    
    //  let namePlayerTwo = document.querySelector("#runnersTwo");
    //  document.getElementById("logoRunners2").src = dataCharacter.logo;
    //  namePlayerTwo.textContent = dataCharacter.name;
    
    
    let downloadTimer = setInterval(function() {
      document.getElementById("countdown").innerHTML = timeleft;
      document.getElementById("progressBar").value = 60 - timeleft;
      timeleft -= 1;
      if (timeleft <= 0 || (playerTwo.health == 0 && playerOne.health == 0)) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Ha terminado la Carrera";
        document.body.style.backgroundImage ="url('" + backgrounds[randomBackground] + "')";
        
      }
    }, 1000);
    
    // function generateRandomColor() {
      //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
      // }
      //   }
      
      
      let randomBackground = Math.floor(Math.random() * 5) + 0 ;
          
      function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

     
