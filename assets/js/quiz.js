const quizQuestions = [
    {
        question: "Where was our first date?",
        options: ["Bardhaman", "Durgapur", "Burar", "Coochbehar"],
        correct: "Durgapur"
    },
    {
        question: "Kobe amader Prothom kotha hoia chilo???",
        options: ["28/3/2021", "25/3/2021", "26/3/2021", "27/3/2021"],
        correct: "26/3/2021"
    },
    {
        question: "Where did we first meet?",
        options: ["Through Friends", "At Work", "Online", "At a Party"],
        correct: "Online"
    },
    {
        question: "Ami Jani tui amr i thakbi always ... thakbi to??",
        options: ["Yes", "No", "Akdom na", "Forever"],
        correct: "Forever"
    },
    {
        question: "Sob quiestion gulo mon theke ans dile to?",
        options: ["Yes", "No"],
        correct: "Yes"
    }
    
    
];


let currentQuestionIndex = 0;
let score = 0;

function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    let html = `
        <div class="quiz-question">
            <h3>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h3>
            <p>${currentQuestion.question}</p>
            <div class="options">
                ${currentQuestion.options.map(option => `
                    <button class="quiz-option" onclick="checkAnswer('${option}')">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    quizContainer.innerHTML = html;
}

function checkAnswer(answer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        renderQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = (score / quizQuestions.length) * 100;
    
    quizContainer.innerHTML = `
        <div class="quiz-results">
            <h3>Quiz Complete! 🎉</h3>
            <p>You scored ${score} out of ${quizQuestions.length}</p>
            <p>Love Rating: ${percentage}% 💕</p>
            <button onclick="resetQuiz()" class="primary-button">Try Again</button>
        </div>
    `;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    renderQuiz();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', renderQuiz);