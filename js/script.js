/*global $*/
$("#intro").hide();
let randNum1 = Math.floor(Math.random() * 9) + 1;
randNum1 = randNum1.toString(); 
let randNum2 = Math.floor(Math.random() * 9) + 1;
randNum2 = randNum2.toString();
let randNum3 = Math.floor(Math.random() * 9) + 1;
randNum3 = randNum3.toString();
let randNum4 = Math.floor(Math.random() * 9) + 1;
randNum4 = randNum4.toString();
let randNums = [randNum1, randNum2, randNum3, randNum4];
let numTries = 0;
let numCorrect = 0;
let totallyCorrect = 0;
let cheatClicked = false;
$("#verify").click(function() {
    let guess1 = $("#input1").val();
    let guess2 = $("#input2").val();
    let guess3 = $("#input3").val();
    let guess4 = $("#input4").val();
    let guesses = [guess1, guess2, guess3, guess4];
    for (let checkNum = 0; checkNum < 3; checkNum++) {
        if (randNums[checkNum] === guesses[checkNum]){
            if (cheatClicked === false) {
                alert("you win!");
            } else {
                alert("nice try bud... why don't you reload and actually solve the puzzle hmmm? try to accomplish something for once in your life? hmmmmmmmmmmmmm?");
            }
        } else if ((randNums[checkNum] !== guesses[checkNum]) && (randNums[checkNum] === guesses[checkNum + 1] || randNums[checkNum + 2] || randNums[checkNum] === guesses[checkNum + 3] || randNums[checkNum] === guesses[checkNum - 1] || randNums[checkNum] === guesses[checkNum - 2] || randNums[checkNum] === guesses[checkNum - 3])) {
                numCorrect++;
                totallyCorrect = 0;
                alert("Numbers Correct: " + numCorrect + ", Numbers Correct and in Right Place: " + totallyCorrect);
        }
    }
});
$("#reveal").click(function(){
    cheatClicked = true;
    alert("well that's sad. couldn't figure it out yourself. ha.");
    $("#answerReveal").html(randNums);
});