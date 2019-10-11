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
    var numGen = Math.floor(Math.random() * 121) + 30;
    $("#rNumber").html(numGen);
    console.log(numGen);

    //Random number for each crystal
    var crys1 = Math.floor(Math.random() * 6) + 35
    $("#blueCrystal").html(crys1);
    console.log(crys1);
    var crys2 = Math.floor(Math.random() * 11) + 12
    $("#redCrystal").html(crys2);
    console.log(crys2);
    var crys3 = Math.floor(Math.random() * 10) + 1
    $("#greenCrystal").html(crys3);
    console.log(crys3);
    var crys4 = Math.floor(Math.random() * 9) + 24
    $("#purpleCrystal").html(crys4);
    console.log(crys4);

    //if statement to prevent duplicate numbers(doesn't seem to work lol)
    // if (crys1 === crys2 || crys1 === crys3 || crys1 === crys4) {
    //     crys1;
    // } else if (crys2 === crys1 || crys2 === crys3 || crys2 === crys4) {
    //     crys2;
    // } else if (crys3 === crys1 || crys3 === crys2 || crys3 === crys4) {
    //     crys3;
    // } else if (crys4 === crys1 || crys4 === crys2 || crys4 === crys3) {
    //     crys4;
    // }
});