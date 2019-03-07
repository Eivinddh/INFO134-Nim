minimumPossibleGrab = 2;
maximumPossibleGrab = 3;



class Player {
    constructor(name, human) {
        if(name == undefined || human == undefined) {
            throw "Invalid player values";
        }
        
        this.name = name;
        this.human = human;
    }

}

class Nim {

    constructor(player1, player2, victory, total, maxGrab) {
        if(maxGrab === undefined) {
            maxGrab = 3;
        }
        if(maxGrab >= minimumPossibleGrab && maxGrab <= maximumPossibleGrab) {
            throw "'maxGrab' has to be greater than " + (minimumPossibleGrab - 1) + " less than " + (maximumPossibleGrab + 1);
        }
        
        if (player1.human === false && player2.human === false) {
            throw "No players are human";
        }

        if(total < 12) {
            throw "Invalid amount of marbles";
        }
        
        this.player1 = player1;
        this.player2 = player2;
        this.victory = victory;
        this.total = total;
        this.maxGrab = maxGrab;
        
    }

    takeMarble (amountOfMarbles, currentPlayer) {
        if(amountOfMarbles > maxGrab && amountOfMarbles < 1) {
            throw "Invalid amount of marbles";
        }
        this.currentPlayer = currentPlayer;
        total -= amountOfMarbles;

        if(total <= 0) {
            victory(currentPlayer);
        }
    }
}