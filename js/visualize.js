//Help method
function invisible(id){
    document.getElementById(id).style.visibility = "hidden";
}

/**
 * Sets the visibility of the simulated marbles to hidden.
 * 
 * @param {*} totalLeft The amount of marbles left
 */
function visualizeMarbles(totalLeft) {
    if(10 == totalLeft){
        invisible("plus");
    }

    if(10 > totalLeft){
        invisible("plus");
        for(i = totalLeft+1; i <= 10; i++){
            invisible("m" + i);
        }
    }
}

//Toggles one of the buttons to disabled based on whose turn it is
function toggleButton(buttonId, otherButtonId){
    var buttonToBeDisabled = document.getElementById(buttonId);
    buttonToBeDisabled.disabled = true;
    var buttonToBeEnabled = document.getElementById(otherButtonId);
    buttonToBeEnabled.disabled = false;
}

//Resets the input field values (for each players move) to nothing
function resetValue(){
    firstPlayerMove.value = "";
    secondPlayerMove.value = "";
}

function updateStatus(){
    document.getElementById(displayTotal).innerHTML = gameOfNim.totalLeft;
}

/** Is to be called after a player has registered their move to the nimGame object. 
 *  Visualizes GUI according to game status.
 *  If this method gets called, it should implicate that given values were legal (i.e. no exceptions thrown).
 */
function visualize(curPlayer){
    visualizeMarbles(gameOfNim.totalLeft);
    if(curPlayer=="p1"){
        toggleButton("firstPlayerButton", "secondPlayerButton");
    }
    else{
        toggleButton("secondPlayerButton", "firstPlayerButton");
    }
    //resetValue();
}