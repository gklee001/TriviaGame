//get document ready to push any jquery
$(document).ready(function () {

    //button disappear after it is clicked
    $("#start").on('Click' = "this.style.visibility= 'hidden';");


    //more variables, need to add .text to get them to appear in the right/wrong div//
    var correct = 0;
    $("#right").text(correct)
    var incorrect = 0;
    $("#wrong".text(incorrect)
    var unanswered = 0;
    var timeStart = 25;



    //questions for trivia game
    var question1 = "If a car is traveling at 40 MPH, how long will it take to go 190 miles.";
    var question2 = "From which country did Mexico gain its independence in the 19th century";
    var question3 = "Buzz Aldrin and Neil Armstrong were the first two men in the world to do what?";
    var question4 = "The first fireworks were invented in the 7th century in what country?";
    var question5 = "The plural of 'moose' is...?";
    var question6 = "what do you call a group of crows?";
    var question7 = "Which state is called the Lone Star state?";
    var question8 = "The United States and Mexico are separated by which river?";
    var question9 = "What is the largest internal organ (by mass) in the human body?";


    //variables for choices
    Choices: {
        question1: ["4 hours, 45 minutes", "3 hours, 30 minutes", "4 hours, 15 minutes", "5 hours"]
        question2: ["United States of America", "Spain", "France", "United Kingdom"]
        question3: ["Bungee jump off Mt. Everest", "flew a plan using recycled human waste", "walk on the moon", "discover the moon"]
        question4: ["China", "Great Britain", "India", "Morocco"]
        question5: ["mooses", "moose", "moosie", "mooze"]
        question6: ["a murder", "a series", "a wise tale", "a school"]
        question7: ["Texas", "New Mexico", "Tennessee", "Alabama"]
        question8: ["The Rio Grande River", "The Red River", "The Mississippi River", "The Yukon River"]
        question9: ["the stomach", "the brain", "the liver", "the lungs"]
    }



    //variables for actual answers
    Answers: {
        question1: "4 hours, 45 minutes",
            question2: "Spain",
                question3: "walk on the moon",
                    question4: "China",
                        question5: "moose",
                            question6: "a murder",
                                question7: "Texas",
                                    question8: "The Rio Grande River",
                                        question9: "the liver",
}


})