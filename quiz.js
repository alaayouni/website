document.addEventListener("DOMContentLoaded", function() {
    const correctAnswers = {
        q1: "1983",
        q2: "Look What the Cat Dragged In",
        q3: "Bret Michaels",
        q4: "Glam Metal",
        q5: "Every Rose Has Its Thorn",
        q6: "Mechanicsburg",
        q7: "C.C. DeVille",
        q8: "Flesh & Blood",
        q9: "Rikki Rockett",
        q10: "1988"
    };

    function submitQuiz() {
        const form = document.getElementById('quiz-form');
        const resultContainer = document.getElementById('quiz-result');
        let score = 0;
        let resultHTML = '';
        let allAnswered = true;

        Object.keys(correctAnswers).forEach((question, index) => {
            const selectedAnswer = form[question].value;
            if (!selectedAnswer) {
                allAnswered = false;
                return;
            }
            if (selectedAnswer === correctAnswers[question]) {
                score++;
                resultHTML += `<p>Frage ${index + 1}:  <span class="correct-answer">Richtig.</span></p>`;
            } else {
                resultHTML += `<p>Frage ${index + 1}: <span class="wrong-answer">Falsch.</span> Richtige Antwort ist "${correctAnswers[question]}"</p>`;
            }
        });

        if (!allAnswered) {
            alert("Bitte beantworten Sie alle Fragen, bevor Sie den Test absenden.");
            return;
        }

        // Calculate half of the total number of questions
        const halfTotal = Math.ceil(Object.keys(correctAnswers).length / 2);

        // Determine if score is below or equal/greater than half
        const scoreClass = score < halfTotal ? 'score-low' : 'score-high';

        resultHTML += `<p>Ihre Gesamtpunktzahl ist: <span class="${scoreClass}">${score}</span> von ${Object.keys(correctAnswers).length}</p>`;

        resultContainer.innerHTML = resultHTML;
    }

    const submitButton = document.querySelector('button');
    submitButton.addEventListener('click', submitQuiz);
});