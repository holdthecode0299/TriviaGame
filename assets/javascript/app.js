var card = $("#quiz-area");

var questions = [
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
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 30,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Check Answers</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>Times Up!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});




