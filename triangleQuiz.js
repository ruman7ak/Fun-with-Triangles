const quizForm = document.querySelector(".quiz-form");
const btn = document.querySelector("#submit-btn");
const output = document.querySelector("#Output");

const rightAnswers= ["90","right-angled"];

function calculateScore(){
    index =0;
    score = 0;

    const formResults= new FormData(quizForm);
    for(let value of formResults.values()){
        if (value== rightAnswers[index]){
            score++;
        }index++;
    }
    output.innerText = "Your score is "+score;
}

btn.addEventListener('click', calculateScore);