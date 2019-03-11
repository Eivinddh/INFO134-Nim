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

function invisible(id){
    document.getElementById(id).style.visibility = "hidden";
}