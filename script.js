const quizForms = document.querySelectorAll(".quiz-form");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function () {
    let score = 0;

    quizForms.forEach((form, index) => {

        const selectedAnswer = form.querySelector('input[name="resposta"]:checked');

        if (selectedAnswer) {

            const correctAnswer = form.getAttribute("data-correct-answer");

            if (selectedAnswer.value === correctAnswer) {
                score++;

                form.classList.add("correct-question"); 
            } else {
                const input = form.querySelector(`input[value=${correctAnswer}]`);
                if(input) {
                    const label = input.parentElement;
                    label.setAttribute('id', 'correct-answer')
                }
                form.classList.add("incorrect-question");
            }
        }
    });

    alert(`Você acertou ${score} de 5 perguntas.`);
});
