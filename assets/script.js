//highscore localstorage
var currentQuestionIndex = 0
const questions = [
  {
    question: 'blha',
    choices: ['a', 'b', 'c', 'd'],
    answer: 'a'
  },
  {
    question: 'zzz',
    choices: ['a', 'b', 'c', 'd'],
    answer: 'b'
  },
  {
    question: 'yyyy',
    choices: ['a', 'b', 'c', 'd'],
    answer: 'c'
  },
]
                            //gets play button element from html document
var startButton = document.getElementById("play");

                            //event listener for play button
startButton.addEventListener('click', startGame);

var menuButton = document.getElementById('mainMenu');
menuButton.addEventListener('click', () => mainMenu())

                            //selects the starting text in the home page
var menu = document.getElementById("details")
                            //selects the container for all game 
var gameContainer = document.getElementById("game-container")

var questionText = document.getElementById('question')
// TODO add choices html element
var choicesnText = document.getElementById('choices')

var textBox1 = document.getElementById('ans1')
var textBox2 = document.getElementById('ans2')
var textBox3 = document.getElementById('correct')
var answerText = ["ans1", "ans2", "ans3", "ans4"]
var correctAnswer = ["correct1", 'correct2']
var timeEl = document.getElementById("time");

// TODO: addd this html element
var feedbackEl = document.getElementById("feedback")
//startgame function
function startGame() {

    console.log("started")
    setTime()
    menu.style.display = "none";
    gameContainer.style.display = "block"
    questionsFunk()

    function setTime() {
    //gets time element from html document

    //assigns a value of seconds are placed on the coutdown timer
  var secondsLeft = 45;       
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            
          } 
      
        }, 1000);
}


    // function nextQuestion() {

    //   questionText.innerHTML = "what is the next question?"
    //   textBox1.innerHTML = answerText[2];
    //   textBox1.innerHTML = answerText[2];
    //   textBox2.innerHTML = answerText[3];
    //   textBox3.innerHTML = correctAnswer[1];
    
    
    // }

    var count = 0;
    var countEl = document.getElementById("score");
    
    // Updates count on page
    function setCounterText() {
      countEl.textContent = count;
    }

    // Attach event listener to decrement button element
    textBox1.addEventListener("click", function() {
      // Action will fire if count is greater than  0
      if (count > 0) {
        count--;
        setCounterText();
        
        localStorage.setItem("count", JSON.stringify(countEl.textContent));
        //localStorage.setItem("count", scoreCount.textContent);
      }
    });
        // Attach event listener to decrement button element
        textBox2.addEventListener("click", function() {
          // Action will fire if count is greater than  0
          if (count > 0) {
            count--;
            setCounterText();
            localStorage.setItem("count", JSON.stringify(countEl.textContent));
            //  localStorage.setItem("count", scoreCount.textContent);
          }
        });
    // Attach event listener to increment button element
    textBox3.addEventListener("click", function() {
      count++;
      setCounterText();
      localStorage.setItem("count", JSON.stringify(countEl.textContent));
      //  localStorage.setItem("count", scoreCount.textContent);
    });
    

}

//create a function for the question and answer text
function questionsFunk() {
  // textBox1.addEventListener('click', () => nextQuestion());
  // textBox2.addEventListener('click', () => nextQuestion());
  // textBox3.addEventListener('click', () => nextQuestion());
  //  questionText.innerHTML = "what is the question?"
  //  textBox1.innerHTML = answerText[0];
  //  textBox2.innerHTML = answerText[1];
  //  textBox3.innerHTML = correctAnswer[0];``
   
  // get current question
  var currentQuestion = questions[currentQuestionIndex]

  // TODO add title element to html
  var title = document.getElementById('title')
  title.textContent = currentQuestion.title

  // looop pver questiomn chocies 
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion[i];
    
    var qstnBtn = document.createElement('button')

    qstnBtn.setAttribute('value', choice)

    qstnBtn.textContent = choice

    choicesnText.appendChild(qstnBtn)
  }
   }

function questionClicked(e) {
 var buttonElement = event.target;

 // if the click isnt a choice, kill function
 if (!buttonElement.matches('.choice')) {
  return;
 }

 // wrong clicked
 if (buttonElement.value !== questions[currentQuestionIndex].answer) {
  // take time away
  secondsLeft -= 10

  if (secondsLeft < 0) {
    secondsLeft = 0
  }

  timeEl.textContent = secondsLeft

  feedbackEl.textContent = 'you were wrong'
 } else {
  feedbackEl.textContent = 'you were right'
 }
 // take us to new question
 currentQuestionIndex++

 // if there are no more qurstions
 if (secondsLeft <= 0 || currentQuestionIndex === questions.length) {
  // function to end game
 } else {
  // get new question
 }
}





/*
//score increment and decrement
var a = 0;
function increase(){
      var scoreCount = document.getElementById("score");
     scoreCount.textContent = a;
      a++;

}   

var b = 0;
function decrease(){
      var scoreCount = document.getElementById("score");
     scoreCount.textContent = b;
      b--;


} 

*/


//create a function for the menu button
function mainMenu() {

  menu.style.display = "block";
  gameContainer.style.display = "none"

  

}





