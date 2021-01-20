var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  car1IMG = loadImage("images/mario3.png");
  car2IMG = loadImage("images/mario2.png");
  car3IMG = loadImage("images/mario1.png");
  car4IMG = loadImage("images/mario.png");
  trackIMG = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
   if(gameState === 2){
     game.update(2);
   }
}
