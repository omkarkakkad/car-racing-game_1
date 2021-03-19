var gameState = 0;
var playerCount;
var database;

var form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){

}

