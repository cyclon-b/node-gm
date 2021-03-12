export class ConsoleProcessor {
    constructor() {
        this.stdin = process.stdin;
        this.stdout = process.stdout;
    }

    consoleReverse() {
        this.stdin.on('readable', () => {
            let input = this.stdin
                .read()
                .toString()
                .split('')
                .reverse()
                .join('');
            this.stdout.write(`${input} \n`);
        });
    }

}