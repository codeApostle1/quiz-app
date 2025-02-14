const questionText = document.getElementById("question");
const popText = document.getElementById("qimg");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");

const start = document.getElementById("start");
 const previous = document.getElementById("prev");
 const quit = document.getElementById("quit");
 const next = document.getElementById("next");

 let currentQuestion = 0;
 let score = 0;

const quizData = [
    {question : "What is the capital of France",
     options: ["paris", "london", "Abia"]   ,
     answer: 0

    },

    {question : "Who Painted Mona Lisa",
        options: ["Leonard Da Vinci", "Michealangelo", "Raphael"]   ,
        answer: 0
   
       },

       {question : "What class of food  is Beans",
        options: ["calcium", "Carbohydrate", "Protein"]   ,
        answer: 0
   
       }


]

start.addEventListener("click", startQuiz);

function startQuiz() {
    questionText.textContent = quizData[currentQuestion].question;

    option1.textContent = quizData[currentQuestion].options[0]
    option2.textContent = quizData[currentQuestion].options[1]
    option3.textContent = quizData[currentQuestion].options[2]

}


