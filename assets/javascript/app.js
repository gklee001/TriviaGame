//get document ready to push any jquery\

$(document).ready(function () {
    var countDown;
    var time = 90
    function start() {
        time--;
        $('#timer').text(time)
        if (time === 0) {
            $('.questions').hide();
            clearInterval(countDown);
            console.log(countDown);
        }
    }

    console.log("ready");
    $('#start').on("click", function () {
        $('.questions').toggle();
        $('#start').hide();
        $('#timer').text(time);
        countDown = setInterval(start, 1000);
    })


    $("form").on("submit", function (event) {
        event.preventDefault();
        //
        var data = $("form").serializeArray();
        console.log(data);
        console.log(9 - data.length)
        $('.unanswered').text(9 - data.length);
    });

}

)





//more variables, need to add .text to get them to appear in the right/wrong div//
var correct = 0;
$("#right").text(correct)
var incorrect = 0;
$("#wrong").text(incorrect)
//need to make condition to mark unanswered questions as wrong once time runs out//
var unanswered = 0;





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
