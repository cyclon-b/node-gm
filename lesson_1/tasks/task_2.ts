import * as csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';

const CSV_PATH = path.join(__dirname, 'csv/hw1.csv');
const TXT_PATH = path.join(__dirname, 'txt/hw.txt');

const readableStream = fs.createReadStream(CSV_PATH);
const writableStream = fs.createWriteStream(TXT_PATH);


const convertCsvToTxt = (): void => {
   readableStream.pipe(csv()).pipe(writableStream);

    readableStream.on('error', (err: Error) => {
        console.log(`READ ERROR! ${err.message}`);
        readableStream.emit('close');
    });
    writableStream.on('error', (err: Error) => {
        writableStream.emit('close');
        console.log(`WRITE ERROR! ${err.message}`);
    });

}
 convertCsvToTxt();