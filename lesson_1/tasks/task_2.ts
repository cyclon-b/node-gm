import * as csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';
import { Readable } from 'stream';

const CSV_PATH = path.join(__dirname, 'csv/hw1.csv');
const TXT_PATH = path.join(__dirname, 'txt/hw.txt');

const readableStream = Readable.from(csv().fromFile(CSV_PATH).on('data', (data) => data));
const writableStream = fs.createWriteStream(TXT_PATH);

readableStream.on('data', (chunk) => {
    writableStream.write(chunk.toString());
    readableStream.emit('close');
    writableStream.emit('close');
});

readableStream.on('error', (err: Error) => {
    console.log(err.message);
    readableStream.emit('close');
});
writableStream.on('error', (err: Error) => {
    writableStream.emit('close');
    console.log(err.message);
});