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
$("#answerReveal").append(randNums);
$("#verify").click(function() {
    let guess1 = $("input1").val();
    let guess2 = $("input2").val();
    let guess3 = $("input3").val();
    let guess4 = $("input4").val();
    if (guess1 === randNum1 && guess2 === randNum2 && guess3 === randNum3 && guess4 === randNum4) {
        
    }
});
$("#reveal").click(function(){
    alert("well that's sad. couldn't figure it out yourself. ha.");
    $("#answerReveal").append(randNums);
});