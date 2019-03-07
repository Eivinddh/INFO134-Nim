const victory = () => {
    "use strict";
    alert("Du vant!"); 
};

const player1 = new Player("Per", false); // TODO: Gief args
const player2 = new Player("Ida", true); // TODO: Gief args


var gameOfNim = new Nim(player1, player2, victory, undefined, 3);

function startGame() {
    document.getElementById("myButton").onclick = undefined;
}