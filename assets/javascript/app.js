window.onload = function () {
    var trivia = [
        {
            question: "Who is Manchester United's all time top scorer?",
            answers: ['Bobby Charlton','Wayne Rooney', 'Cristiano Ronaldo', 'Lionel Messi'],
            correctAnswer: 'Bobby Charlton',
        },
        {
            question:'Who is the Longest serving coach of Manchester United?',
            answers: ['Sir Alex Ferguson', 'Matt Busby','Ryan Giggs'],
            correctAnswer: 'Sir Alex Ferguson', 
        },
        {
            question: "What is the name of Manchester United's Home Stadium?",
            answers: ['Old Trafford', 'Manchester City Field','United Stadium'],
            correctAnswer: 'Old Trafford',
        },
        {   question:"What team is Manchester United's rival?",
            answers: ['Arsenal', 'Paris Saint German', 'FC Barcalona', 'Chelsea'],
            correctAnswer: 'Arsenal', 

        },
        {
            question: "Which comany sponsors Manchester United?",
            answers: ['Chevrolet', 'Sharp Electronics', 'Mercedez Benz', 'AIG', 'Vodafone'],
            correctAnswer: 'Chevrolet',
        },
        {
            question: "How many Premier League Titles does Manchester United Hold?",
            answers: ['13', '1', '7', '25', '10'],
            correctAnswer: '13', 
        },
    ]

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
        
    $("#correct").text(correct);
    $("#wrong").text(wrong);
    $("#unanswered").text(unanswered);
// On click start button QUIZ CONTAINER DISPLAY 
// questions pop up w/ answer radio button timer starts

    $("#start").on("click", function() {
        for (var i = 0; i < trivia.length; i++) {
            var p = $("<p>")
            p.text(trivia[i].question)
            $(".trivia").append(p)
            
            for (var j = 0; j < trivia[i].answers.length; j++) {
                var answers = $("<input type='radio'>")
                answers.attr("name", "question" + i).attr("value", trivia[i].answers[j])
                var label = $("<label>")
                // answers.text(trivia[i].answers[j])
                label.text(trivia[i].answers[j])
                $(".trivia").append(answers).append(label)
            }
        }

        var timeRemaining = 30;
        var timer = setInterval(function() {
            $("#timeRemaining").text(timeRemaining)
            timeRemaining -= 1;

            if(timeRemaining <= 0) {
                clearInterval(timer);
                stop();
                alert("TIMES UP!");
            }
        },1000)

        
    })
    $("#done").on("click", function() {
        for (var i=0; i < trivia.length; i++) {
            var value = $(`input[name="question${i}"]:checked`).val ()
            
            
            if (value === trivia[i].correctAnswer){
                correct++;
            }else {
                wrong++;
            }
        }
        console.log(done)
    })
}


// On click DONE button RESULTS CONTAINER DISPLAY 



