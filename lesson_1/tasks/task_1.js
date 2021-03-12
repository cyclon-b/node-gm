const stdin = process.stdin;
const stdout = process.stdout;
const consoleReverse = () =>
stdin.on('readable', () => {
    let input = stdin
        .read()
        .toString()
        .split('')
        .reverse()
        .join('');
    stdout.write(`${input} \n`);
});

consoleReverse();