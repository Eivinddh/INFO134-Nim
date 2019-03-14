const victory = (winner) => {
    "use strict";
    alert(winner + " won! Congratulations!"); 
};


var params = window.location.search.slice(1).split("&");
var gameOfNim = undefined;

//Text input fields where players register their desired move
var firstPlayerMove = document.getElementById("p1Move");
var secondPlayerMove = document.getElementById("p2Move");


//Instatiate game based on given information
var player1Name = params[0].split("=")[1];
var player2Name = params[1].split("=")[1];
var marbles = params[2].split("=")[1];
var maxGrab = params[3].split("=")[1];

var p1 = new Player(player1Name, true);
var p2 = new Player(player2Name, true);
var gameOfNim = new Nim(p1, p2, victory, marbles, maxGrab);


function registerMove(player){
    if(gameOfNim === undefined){
        throw "Game not instatiated."
    }
    else if(player == "p1"){
        one = gameOfNim.player1;
        gameOfNim.takeMarble(firstPlayerMove.value, one);
    }
    else{
        two  = gameOfNim.player2;
        gameOfNim.takeMarble(secondPlayerMove.value, two);
    }
}