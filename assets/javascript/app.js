'use strict';

//Variables used for the final summary page. All Done!
let correctAnswer = 0;
let incorrectAnswer = 0;
let unAnswered = 0;

let timeOut = 5;
let intervalValue;

//const varQuestion;

//JSON object questions
/*const varQuestion1 = {"question1":[
    {"ans1":"let"},
    {"ans2":"var"},
    {"ans3":"const"}
    {"ans4":"verb"}
]}*/

// When the document is ready add the note to the console.log and hide the Done button.
$(document).ready(function() {
    console.log("document is ready");
    $("#done").hide();
    $("#radioQuestion1").hide();
    $("#radioQuestion2").hide();
  
//Functions
const mainFunction = function() {
    //console.log("starting");
    clearInterval(intervalValue);
    intervalValue = setInterval(reduce, 1000);
    //console.log("mainfunction running" + intervalValue);
};

const reduce = function() {
    //console.log("reduce running" + intervalValue);
    timeOut = timeOut - 1;
    $("#main-div").html("Time Left: " + timeOut);
    //$("#main-div").html(`<div class="row">${timeOut}</div>`)
    if(timeOut === 0) {
        stop();
        console.log("time is up");
    }
}

const stop = function() {
    clearInterval(intervalValue);
    //console.log(intervalValue);
}

const createQuestions = function() {
    console.log("createQuestions starting");
    $("#questionid").append(`<div class="row q1"> "Question1" </div>`);
    $("#questionid").append(`<div class="row q2"> "Question2" </div>`);
}

// Buttons
$("#start").click(function() {
    $("#start").hide();
    //$("#main-div").html("Time Remaining: ");
    $("#radioQuestion1").show();
    $("#radioQuestion2").show();
    $("#done").show();
    mainFunction();
    createQuestions();
});

$(".q1").click(function() {
    console.log($(this).val());
})

//this functions checks the score and mainpulates the final document result page
const scoreChecker1 = function() {
    if($("#jsQuestion1").is(':checked')) {
        correctAnswer++;
        console.log("correct answer", correctAnswer);
    } else if($("#jsQuestion12").is(':checked'))  {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else if($("#jsQuestion13").is(':checked')) {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else if($("#jsQuestion14").is(':checked')) {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else {
        unAnswered++;
        console.log("unanswered", unAnswered);
    }
}

const scoreChecker2 = function() {
    if($("#jsQuestion22").is(':checked')) {
        correctAnswer++;
        console.log("correct answer", correctAnswer);
    } else if($("#jsQuestion2").is(':checked'))  {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else if($("#jsQuestion21").is(':checked')) {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else if($("#jsQuestion23").is(':checked')) {
        incorrectAnswer++;
        console.log("incorrect answer", incorrectAnswer);
    } else {
        unAnswered++;
        console.log("unanswered", unAnswered);
    }
}


$("#done").click(function() {
    scoreChecker1();
    scoreChecker2();
    console.log("hide dom elements and then show summary page instead")
})


})  

/* other code
.style.display
$("#start").click(function() {
    let windowTimeOut = setTimeout(function() {
        $("#start").remove();
        alert("Your time is up!");
    }, 5000); 
});

*/
//const reduceTimeOut = function() {
//    timeOut = timeOut - 1;
//    $("#main-div").append(`<div class="row" ${timeout} </div>`);
//};

//objects
//Timer

