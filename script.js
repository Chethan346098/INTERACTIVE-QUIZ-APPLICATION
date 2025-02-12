const questions=[
    {
        question: "which is largest animal in the world?",
        answers: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "Giraffe" , correct: false},
        ]
    },
    {
        question: "Who sang the title song for the latest Bond film, No Time to Die?",
        answers: [
            { text: "Adale" , correct: false},
            { text: "sam smith" , correct: false},
            { text: "Billie Smith" , correct: true},
            { text: "none" , correct: false},
        ]
    },
    {
        question: "What is the name of the element with the chemical symbol 'He'?",
        answers: [
            { text: "Helium" , correct: true},
            { text: "Hydrogen" , correct: false},
            { text: "Holmium" , correct: false},
            { text: "Hafnium" , correct: false},
        ] 
    },
    {
        question: "Which star is the brightest star in the night sky?",
        answers: [
            { text: "Sirius A" , correct: true},
            { text: "Arcturus" , correct: false},
            { text: "North Star" , correct: false},
            { text: "none" , correct: false},
        ]
    },
        
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Syndey" , correct: false},
            { text: "Melbourne" , correct: false},
            { text: "Canberra" , correct: true},
            { text: "Brisbane" , correct: false},
        ] 

    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "venus" , correct: false},
            { text: "Mars" , correct: true},
            { text: "jupiter" , correct: false},
            { text: "saturn" , correct: false},
        ] 

    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O" , correct: true},
            { text: "CO2" , correct: false},
            { text: "O2" , correct: false},
            { text: "NACL" , correct: false},
        ] 

    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1905" , correct: false},
            { text: "1912" , correct: true},
            { text: "1930" , correct: false},
            { text: "1931" , correct: false},
        ] 

    },
    {
        question: "Which singer is known as the Queen of Pop?",
        answers: [
            { text: "Madonna" , correct: true},
            { text: "Beyoncé" , correct: false},
            { text: "Lady Gaga" , correct: false},
            { text: "Taylor Swift" , correct: false},
        ] 

    },
    {
        question: "What is the name of the fictional wizarding school in the Harry Potter series?",
        answers: [
            { text: "Hogwarts" , correct: true},
            { text: "Beauxbatons" , correct: false},
            { text: "Durmstrang" , correct: false},
            { text: "sIlvermorny" , correct: false},
        ] 

    },

 ];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 
 let currentQuestionIndex = 0;
 let score= 0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 
 function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;



     currentQuestion.answers.forEach(answer => {
     const button=document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer); 
    });
 }
 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
         selectedBtn.classList.add("correct");
         score++;
         
         }
    else{
         selectedBtn.classList.add("incorrect");
            }
                   
      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

    
}
   
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
 }
       
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
 });

startQuiz();

