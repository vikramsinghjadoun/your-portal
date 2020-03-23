// (function(){
//     var questions = [{
//         question:"what is 2*5 ?",
//         choices:[2,5,10,15,20],
//         correctAnswer:2
//     },{
//         question:"what is 2*6 ?",
//         choices:[2,5,10,12,20],
//         correctAnswer:3
//     },{
//         question:"what is 2*1 ?",
//         choices:[2,5,10,15,20],
//         correctAnswer:0
//     }];

//     var questionCounter = 0;
//     var selection = [];
//     var quiz = $('#quiz');

//     // Display initial question
//     displayNext(); 

//     //click handler for the next "button"
//     $('#next').on('click', function(e){
//         e.preventDefault();

//         if(quiz.is(':animated')){
//             return false;
//         }
//         choose();
//         //if user not selected aany choice
//         if(isNaN(selection[questionCounter])){
//             alert('plese select atleast one option')
//         }else{
//             questionCounter++;
//             displayNext();
//         }
//     });

//     //click handler for prev button
//     $('#prev').on('click',function(e){
//         e.preventDefault();

//         if(quiz.is(':animated')){
//             return false;
//         }
//         choose(); 
//         questionCounter--;
//         displayNext();
//     });

//     $('#start').on('click', function(e){
//         e.preventDefault();

//         if(quiz.is(':animated')){
//             return false;
//         }
//         questionCounter=0;
//         selection = [];
//         displayNext();
//         $('#start').hide();
//     });

//     // animation on buttons is not done
//     function createQuestionElement(index){
//         var qelement = $('<div>',{
//             id:'question'
//         });
//         var header = $('<h2>Question' + (index+1) + ':</h2>');
//         qelement.append(header);

//         var question = $('<p>').append(questions[index].question);
//         qelement.append(question);

//         var radioButtons = createRadios(index);
//         qelement.append(radioButtons);

//         return qelement;
//     }

//     //create a list of the answer choices as radio inputs
//     function createRadios(index){
//         var radioList = $('<ul>');
//         var item;
//         var input = '';
//         for(var i=0 ; i< questions[index].choices.length; i++){
//             items = $('<li>');
//             input = '<input type="radio" name="answer" value=' + i + '/>';
//             input += questions[index].choices[i];
//             item.append(input);
//             radioList.append(item);
//         }
//         return radioList;
//     }

//     //reads the user selection and push the value to an array
//     function choose(){
//         selection[questionCounter] = +$('input[name="answer"]:checked').val();
//     }

//     //displays next requested  element
//     function displayNext(){
//         quiz.fadeOut(function() {
//             $('#question').remove();

//             if(questionCounter < questions.lenght){
//                 var nextQuestion = createQuestionElement(questionCounter);
//                 quiz.append(nextQuestion).fadeIn();
//                 if(!(isNaN(selections[questionCounter]))){
//                     $('input[value='+selection[questionCounter]+']').prop('checked',true);
//                 }

//                 //controls display of 'prev' button
//                 if(questionCounter === 1){
//                     $('#prev').show();
//                 }else if(questionCounter === 0){
//                     $('#prev').hide();
//                     $('#next').show();
//                 }
//             }else{
//                 var scoreElem = displayScore();
//                 quiz.append(scoreElem).fadeIn();
//                 $('#next').hide();
//                 $('#prev').hide();
//                 $('#start').show();
//             }
//         });
//     }

//     //computer scores and retun para to be displayed
//     function displayScore(){
//         var score = $('<p>',{id:'question'});

//         var numCorrect = 0;
//         for(var i=0 ; i<selection.lenght ; i++){
//             if(selection[i] === question[i].correctAnswer){
//                 numCorrect++;
//             }
//         }
//         score.append('you got' + numCorrect + 'question out of' + question.length +'right!!!!');
//         return score;
//     }
// })();

(function () {
    var questions = [{
        question: "3 : 81 :: 6 : ?",
        choices: ['36', '750', '1096', '1296'],
        correctAnswer: 3
    }, {
        question: "441 : 462 :: 841 : ?",
        choices: ['800', '830', '870', '890'],
        correctAnswer: 2
    }, {
        question: " 210 : 6 :: ? : 5",
        choices: ['120', '110', '130', '125'],
        correctAnswer: 0
    }, {
        question: " 35 : 53 :: 56 : ?",
        choices: ['50', '60', '65', '70'],
        correctAnswer: 2
    },{
        question: "14 : 195 :: 21 : ?",
        choices: ['420', '440', '460', '480'],
        correctAnswer: 1
    },{
        question: "213 : 300 :: 170 : ?",
        choices: [227,237,247,257],
        correctAnswer: 3
    },{
        question: "5 : 130 :: ? : 1010",
        choices: ['10',  '12','15', '20'],
        correctAnswer: 0
    },{
        question: " 43 : 1 :: 52 : ?",
        choices: ['1',  '2','3', '4'],
        correctAnswer: 2
    },{
        question: " 176 : 14936 :: 549 : ?",
        choices: ['3546',  '4571','25784', '251681'],
        correctAnswer: 3
    },
     {
        question: "20 : 7980 :: 12 : ?",
        choices: ['1520', '1716','4520', '4886'],
        correctAnswer: 1
    }];

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', { id: 'question' });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            questions.length + ' right!!!');
        return score;
    }
})();