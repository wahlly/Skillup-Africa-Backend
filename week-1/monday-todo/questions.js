const questions = [
    'What is your name?',
    'what is your best food?',
    'what do you like doing during your leisure time?'
];

const ask =  (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `)
};

ask();

const answers = []
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim())

    if(answers.length < questions.length) {
        ask(answers.length);
    } else{
        process.exit();
    };
});

process.on('exit', () => {
    const [name, food, hobby] = answers
    console.log(`

    Thank you for your time....

        ${food} will be given to you ${name} as you will also be allowed to enjoy ${hobby}!!!

    `);
});