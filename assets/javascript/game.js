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
    var numGen = Math.floor(Math.random() * 101) + 19;
    $("#rNumber").html(numGen);

    //Random number for each crystal
    var crys1 = Math.floor(Math.random() * 12) + 1
    console.log("Blue crystal: " + crys1);
    var crys2 = Math.floor(Math.random() * 12) + 1
    console.log("Red crystal: " + crys2);
    var crys3 = Math.floor(Math.random() * 12) + 1
    console.log("Green crystal: " + crys3);
    var crys4 = Math.floor(Math.random() * 12) + 1
    console.log("Purple crystal: " + crys4);
    console.log("---------------")

    //reset function
    function reset() {
        totScore = 0;
        $("#totalScore").html(totScore);
        numGen = Math.floor(Math.random() * 101) + 19;
        $("#rNumber").html(numGen);
        crys1 = Math.floor(Math.random() * 12) + 1;
        crys2 = Math.floor(Math.random() * 12) + 1;
        crys3 = Math.floor(Math.random() * 12) + 1;
        crys4 = Math.floor(Math.random() * 12) + 1;
        console.log("Blue crystal: " + crys1);
        console.log("Red crystal: " + crys2);
        console.log("Green crystal: " + crys3);
        console.log("Purple crystal: " + crys4);
        console.log("---------------")
    }


    //Adds value to the total score on click
    $("#blueCrystal").on("click", function () {
        totScore += crys1;
        $("#totalScore").html(totScore);

        //win/loss conditions
        if (totScore > numGen) {
            alert("You Lose!")
            loss++;
            $("#l").html(loss);
            reset()
        } else if (totScore === numGen) {
            alert("You Win!")
            win++;
            $("#w").html(win);
            reset()
        }
    })

    $("#redCrystal").on("click", function () {
        totScore += crys2;
        $("#totalScore").html(totScore);
        if (totScore > numGen) {
            alert("You Lose!")
            loss++;
            reset()
            $("#l").html(loss);
        } else if (totScore === numGen) {
            alert("You Win!")
            win++;
            $("#w").html(win);
            reset()
        }
    })

    $("#greenCrystal").on("click", function () {
        totScore += crys3;
        $("#totalScore").html(totScore);

        if (totScore > numGen) {
            alert("You Lose!")
            loss++;
            $("#l").html(loss);
            reset()
        } else if (totScore === numGen) {
            alert("You Win!")
            win++;
            $("#w").html(win);
            reset()
        }
    })
    $("#purpleCrystal").on("click", function () {
        totScore += crys4;
        $("#totalScore").html(totScore);

        if (totScore > numGen) {
            alert("You Lose!")
            loss++;
            $("#l").html(loss);
            reset()
        } else if (totScore === numGen) {
            alert("You Win!")
            win++;
            $("#w").html(win);
            reset()
        }
    })
});