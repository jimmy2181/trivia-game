$('#start').on('click', function () {

    game.start();
})

var questions = [{
    question: "Who played the character 'Captain Willard' in the 1979 movie 'Apocolypse now'",
    answers: [" Martin Sheen", " Charlie Sheen   ", " Marlon Brando   ", " Burt Reynolds   ", " Robert Redford   "],
    correctAnswer: "Martin Sheen"
}, {
    question: "What was system was used to assign the aliases for the bandits in the 1991 film 'Reservoir Dogs'?",
    answers: [" Numbers   ", " Letters   ", " Animals  ", "Colors", " Countries   "],
    correctAnswer: "Colors"
}, {
    question: "What was Vernita Green's code name in the 2003 film 'Kill Bill'?",
    answers: [" Boa Constrictor   ", " Garden Snake   ", " Anaconda   ", "Copperhead", " Black Mamba   "],
    correctAnswer: "Copperhead"
}, {
    question: "What was the name on Fogell's fake ID in the 2007 movie 'Superbad'?",
    answers: [" Ricky Bobby   ", "McLovin", " McDouble   ", "  Arnold  ", " Fogell   "],
    correctAnswer: "McLovin"
}, {
    question: "What was the name of the boat in the 2008 film 'Step Brothers'?",
    answers: [" The Black Pearl   ", " Santa Maria   ", " The Orca   ", " The Princess Bride   ", "The Gilded Lady"],
    correctAnswer: "The Gilded Lady"
}, {
    question: "What is the real name of The Sundance Kid in the 1967 movie 'Butch Cassidy and the Sundance Kid'?",
    answers: ["Longabaugh", " Cassidy   ", " Williams   ", " Kiddo   ", " Grit   "],
    correctAnswer: "Longabaugh"
}];

var game = {
    correct: 0,
    incorrect: 0,
   
    counter: 60,
    countdown: function () {
      
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },
    start: function () {
        // insert time, 1000seconds
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
      
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}