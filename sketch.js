var database;
var PlayerCount = 0;
var GameState = 0;
var form, game, player;
var canvas;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
}