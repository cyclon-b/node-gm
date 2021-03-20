import * as readline from 'readline';

const stdin = process.stdin;
const stdout = process.stdout;

const consoleHandler = readline.createInterface({
    input: stdin
});
const consoleReverse = () => {
    consoleHandler.question('What do you want to reverse? \n', (answer) => {
            const result = answer.split('').reverse().join('');
            stdout.write(`Reversed result: ${result} \n`);
            consoleReverse();
        },
    );
};

consoleReverse();