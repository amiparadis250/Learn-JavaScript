let QuestionArray = [
    { question: "Who is President Kagame", answer: "He is the first president of Rwanda" },
    { question: "Do you love girls", answer: "girls are not my type ghee" },
    { question: "What is your name", answer: "ISHIMWE Ami Paradis" },
    { question: "Where do you come From", answer: "Kigali City, Rwanda" },
    { question: "How old are you", answer: "I am 20 years old" },
    { question: "What are your favorite programming languages", answer: "Java and Javascript make my day" },
    { question: "What is your Educational Background", answer: "I studied at G.S. Nyakabwende and attended the University of Rwanda in 2023" },
    { question: "Who are your siblings", answer: "IZERE Aimee Sylivie, ISINGIZWE Alscene David, ISHEMA Naome Sympatique" },
];

let currentIndex = 0;
let screen = document.getElementById("Screen");
let questionsButton = document.getElementById("questions");
let answersButton = document.getElementById("answers");
let previousButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

startQuiz();

nextButton.addEventListener("click", function () {
    if (currentIndex < QuestionArray.length - 1) {
        currentIndex++;
        startQuiz();
    }
});

previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        startQuiz();
    }
});

function startQuiz() {
    screen.textContent = QuestionArray[currentIndex].question;
}

answersButton.addEventListener("click", function () {
    screen.textContent = QuestionArray[currentIndex].answer;
});

questionsButton.addEventListener("click", function () {
    startQuiz();
});
