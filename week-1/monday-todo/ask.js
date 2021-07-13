const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    'what is your name',
    'where do you live',
    'which is your best proramming lanuguage'
];

// rl.question('what is your name?', answer => {
//     console.log(`response: ${answer}`);
// });
const collectAnswers = (questions, done) => {
    const answers = [];

    const [firstQuestion] = questions;

    const questionAnswered = (answer) => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else{
            done(answers);
        };
    };
    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, (answers) => {
    console.log('thank you for your answers.  ');
    console.log(answers);
});