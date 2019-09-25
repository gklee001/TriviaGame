//get document ready to push any jquery
$(document).ready(function () {
    console.log("ready");
    $('#start').on("click", function () {
        $('.questions').toggle()
        $('#start').hide()
        $('#timer').text(90)
    })

})






    // //button disappear after it is clicked
    // $("#start").on('Click' = "this.style.visibility= 'hidden';");











//     //more variables, need to add .text to get them to appear in the right/wrong div//
//     var correct = 0;
//     $("#right").text(correct)
//     var incorrect = 0;
//     $("#wrong".text(incorrect)
//     //need to make condition to mark unanswered questions as wrong once time runs out//
//     var unanswered = 0;
//     var timeStart = 25;





//     //variables for actual answers
//     Answers: {
//         question1: "4 hours, 45 minutes",
//             question2: "Spain",
//                 question3: "walk on the moon",
//                     question4: "China",
//                         question5: "moose",
//                             question6: "a murder",
//                                 question7: "Texas",
//                                     question8: "The Rio Grande River",
//                                         question9: "the liver",
// }
