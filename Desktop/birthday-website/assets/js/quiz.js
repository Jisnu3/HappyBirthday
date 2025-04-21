const quizQuestions = [
    {
        question: "Where was our first date?",
        options: ["Coffee Shop", "Movie Theater", "Park", "Restaurant"],
        correct: "Coffee Shop"
    },
    {
        question: "What's my favorite memory with you?",
        options: ["First Kiss", "Beach Trip", "Christmas Together", "Birthday Party"],
        correct: "Christmas Together"
    },
    {
        question: "Where did we first meet?",
        options: ["Through Friends", "At Work", "Online", "At a Party"],
        correct: "Through Friends"
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