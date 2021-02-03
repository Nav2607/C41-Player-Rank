var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var car1, car2, car3, car4, cars;
var carImg1, carImg2, carImg3, carImg4, trackImg, groundImg
var finishedPlayers = 0
var passedFinished = false;

function preload(){
carImg1 = loadImage("./images/car1.png");
carImg2 = loadImage("./images/car2.png");
carImg3 = loadImage("images/car3.png");
carImg4 = loadImage("images/car4.png");
trackImg = loadImage("images/track.jpg");
groundImg =loadImage("images/ground.png");
Platinum = loadImage("images/Platinum Award.png");
Gold = loadImage("images/Gold Award.png");
Sliver = loadImage("images/Sliver Award.png");
Bronze =loadImage("images/Bronze Award.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers === 4){
    game.update(2)
  }
  if(gameState === 2 && finishedPlayers === 4){
    game.end()
  }
  
}
