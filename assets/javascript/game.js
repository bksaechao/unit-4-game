//Starting variables
let ranNum = 0;
let win = 0;
let loss = 0;
let totScore = 0;

//Grabbing elements
$("#rNumber").html(ranNum);
$("#w").html(win);
$("#l").html(loss);
$("#totalScore").html(totScore);

//Styling elements
$("#rNumber").css("color", "red");
$("#rNumber").css("background-color", "#ffffff");
$("#rNumber").css("font-size", "30px");
$("#rNumber").css("padding", "0px 200px 50px 0px");

$("#totalScore").css("color", "red");
$("#totalScore").css("background-color", "#ffffff");
$("#totalScore").css("font-size", "30px");

//Random number is generated when the document is loaded
$(document).ready(function () {
    var numGen = Math.floor(Math.random() * 71) + 30;
    $("#rNumber").html(numGen);
    console.log(numGen);
});