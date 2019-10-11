//Starting variables
let win = 0;
let loss = 0;
let totScore = 0;

//Grabbing elements
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

//Random numbers are generated when the webpage is loaded
$(document).ready(function () {
    //Computer random number
    var numGen = Math.floor(Math.random() * 71) + 30;
    $("#rNumber").html(numGen);
    console.log(numGen);

    //Random number for each crystal
    var crys1 = Math.floor(Math.random() * 10) + 1
    $("#blueCrystal").html(crys1);
    console.log(crys1);
    var crys2 = Math.floor(Math.random() * 10) + 1
    $("#redCrystal").html(crys2);
    console.log(crys2);
    var crys3 = Math.floor(Math.random() * 10) + 1
    $("#greenCrystal").html(crys3);
    console.log(crys3);
    var crys4 = Math.floor(Math.random() * 10) + 1
    $("#purpleCrystal").html(crys4);
    console.log(crys4);
});