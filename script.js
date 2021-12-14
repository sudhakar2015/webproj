const quizDB = [
    {
        question: "Q1: Which crop is sown on the largest area in India?",
        a: "Rice",
        b: "Wheat",
        c: "Sugarcane",
        d: "Maize",
        ans: "ans4"
    },
    {
        question: "Q2: Eritrea, which became the 182nd member of the United Nations in 1993, is on the continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",
        ans: "ans1"
    }, 
    {
        question: "Q3: Which of the following personalities gave ‘The Laws of Heredity’?",
        a: "Robert Hook",
        b: "G.J. Mendel",
        c: "Charles Darwin",
        d: "William Harvey",
        ans: "ans2"
    },    
    {
        question: "Q4: Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        ans: "ans2"
    },   
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
} 

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
     
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}✌️</h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');

    }
});    
