'use strict';

//Variables
let correctAnswer = 0;
let incorrectAnswer = 0;
let unAnswered = 0;
let timeOut = 60;
let intervalValue;

// When the document is ready perform these tasks
$(document).ready(function() {
    console.log("document is ready");
    $("#done").hide();
    $("#radioQuestion1").hide();
    $("#radioQuestion2").hide();
    $("#radioQuestion3").hide();
    $("#radioQuestion4").hide();
    $("#summary1").hide();
    $("#summary2").hide();
    $("#summary3").hide();
    $("#summary4").hide();

//Functions
const mainFunction = function() {
    clearInterval(intervalValue);
    intervalValue = setInterval(reduce, 1000);
};

const reduce = function() {
    timeOut = timeOut - 1;
    $("#main-div").html("Time Left: " + timeOut);
    if(timeOut === 0) {
        stop();
        allDone();
    }
}

const stop = function() {
    clearInterval(intervalValue);
}

// Button
$("#start").click(function() {
    $("#start").hide();
    $("#radioQuestion1").show();
    $("#radioQuestion2").show();
    $("#radioQuestion3").show();
    $("#radioQuestion4").show();
    $("#done").show();
    mainFunction();
});

// These functions check answers and tally scores
const scoreChecker1 = function() {
    if($("#jsQuestion1").is(':checked')) {
        correctAnswer++;
    } else if($("#jsQuestion12").is(':checked'))  {
        incorrectAnswer++;
    } else if($("#jsQuestion13").is(':checked')) {
        incorrectAnswer++;
    } else if($("#jsQuestion14").is(':checked')) {
        incorrectAnswer++;
    } else {
        unAnswered++;
    }
    scoreChecker2();
}

const scoreChecker2 = function() {
    if($("#jsQuestion22").is(':checked')) {
        correctAnswer++;
    } else if($("#jsQuestion2").is(':checked'))  {
        incorrectAnswer++;
    } else if($("#jsQuestion21").is(':checked')) {
        incorrectAnswer++;
    } else if($("#jsQuestion23").is(':checked')) {
        incorrectAnswer++;
    } else {
        unAnswered++;
    }
    scoreChecker3();
}

const scoreChecker3 = function() {
    if($("#jsQuestion33").is(':checked')) {
        correctAnswer++;
    } else if($("#jsQuestion3").is(':checked'))  {
        incorrectAnswer++;
    } else if($("#jsQuestion31").is(':checked')) {
        incorrectAnswer++;
    } else if($("#jsQuestion32").is(':checked')) {
        incorrectAnswer++;
    } else {
        unAnswered++;
    }
    scoreChecker4();
}

const scoreChecker4 = function() {
    if($("#jsQuestion42").is(':checked')) {
        correctAnswer++;
    } else if($("#jsQuestion4").is(':checked'))  {
        incorrectAnswer++;
    } else if($("#jsQuestion41").is(':checked')) {
        incorrectAnswer++;
    } else if($("#jsQuestion43").is(':checked')) {
        incorrectAnswer++;
    } else {
        unAnswered++;
    }
}

const allDone = function() {
    scoreChecker1();
    $("#radioQuestion1").hide();
    $("#radioQuestion2").hide();
    $("#radioQuestion3").hide();
    $("#radioQuestion4").hide();
    $("#done").hide();
    $("#main-div").hide();
    $("#summary1").show();
    $("#summary2").html("Correct Answers: " + correctAnswer).show();
    $("#summary3").html("Incorrect Answers: " + incorrectAnswer).show();
    $("#summary4").html("Unanswered: " + unAnswered).show();
    stop();
}

$("#done").click(function() {
    allDone();
});

})  

/* other code
.style.display
$("#start").click(function() {
    let windowTimeOut = setTimeout(function() {
        $("#start").remove();
        alert("Your time is up!");
    }, 5000); 
});


//const reduceTimeOut = function() {
//    timeOut = timeOut - 1;
//    $("#main-div").append(`<div class="row" ${timeout} </div>`);
//};

//objects
//Timer

const createQuestions = function() {
    console.log("createQuestions starting");
    $("#questionid").append(`<div class="row q1"> "Question1" </div>`);
    $("#questionid").append(`<div class="row q2"> "Question2" </div>`);
}

*/