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
        question: "Ramesh has brother Suresh. Ramesh is the son of Gopal. Govind is Gopal’s father. How is Suresh related to govind?",
        choices: ['son', 'brother', 'grandson', 'grandfather'],
        correctAnswer: 2
    }, {
        question: "Introducing a man, a woman said “His mother is the only daughter of my father”. How is the man related to the woman?",
        choices: ['Brother', 'son', 'father', 'uncle'],
        correctAnswer: 1
    }, {
        question: " P and Q are sisters. R and S are brothers. P’s daughter is R’s sister. What is Q’s relation to S?",
        choices: ['mother', 'Grandmother', 'sister', 'aunt'],
        correctAnswer: 3
    }, {
        question: "A man said to a lady “Your mother’s husband’s sister is my aunt”. How is the lady related to man ?",
        choices: ['sister', 'mother', 'daughter', 'grandDaughter'],
        correctAnswer: 0
    },{
        question: "A man was 32 years of age when he had his first son. His wife was 35 years of age when his son attaied the age of 7 years. the difference between the age of the father and the mother is ______?",
        choices: ['7 years', '3 years', '5 years', '4 years'],
        correctAnswer: 3
    },{
        question: "Karan remembers that his sister’s birthday is not after 18th August. Karan’s mother remembers that Karan's sister birthday is before 20th august but after 17th august.on which date of august is karan's sister birthday?",
        choices: [18,17,19,20],
        correctAnswer: 0
    },{
        question: "Pointing to a lady, Diwakar said, “Her mother’s only grandson is my son.” How is that lady related to diwakar?",
        choices: ['aunty',  'sister','mother', 'wife'],
        correctAnswer: 1
    },{
        question: "Pointing towards a man, Ritika said “He is the son of my grandfather’s only son”. How is Ritika related to that man?",
        choices: ['aunty',  'sister','mother', 'wife'],
        correctAnswer: 1
    },{
        question: "Pointing towards a girl, Chetan said “She is the daughter of the only child of my grandmother”. How is chetan related to that girl?",
        choices: ['father',  'son','brother', 'husband'],
        correctAnswer: 2
    },
     {
        question: "Introducing a woman, a man said “Her mother is the only daughter of my mother-in law”. How is the man related to the woman?",
        choices: ['son', 'brother','husband', 'father'],
        correctAnswer: 3
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