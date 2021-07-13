

// const grab = (flag) => {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag]
// }

const greeting = grab('--greeting');
const user = grab('--user')

// console.log(`language - ${grab(`--lang`)}`)

console.log(process.argv);

const [, , fname, lname] = process.argv;

console.log(`your name is ${fname} ${lname}`);