const victory = (winner) => {
    "use strict";
    alert(winner + " won! Congratulations!"); 
};

var gameOfNim = undefined;
var p1 = undefined;
var p2 = undefined;

//Text input fields where players register their desired move
var firstPlayerMove = document.getElementById("p1Move");
var secondPlayerMove = document.getElementById("p2Move");

/**
 * Note to self: Trenger kun å overføre gameOfNimObjektet fra settings.html til game.html.
 */
function startGame() {
    //Instatiate game based on given information
    p1 = new Player(document.getElementById("firstPlayer").value, true);
    p2 = new Player(document.getElementById("secondPlayer").value, true);
    var maxG = document.getElementById("max");
    var amount  = document.getElementById("amount");
    gameOfNim = new Nim(player1, player2, victory, amount, maxG);
}

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