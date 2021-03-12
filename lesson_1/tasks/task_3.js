import {ConsoleProcessor} from './task3_modules/console_processor.js';
import {CsvProcessor} from './task3_modules/csv_processor.js';
import * as path from 'path';

const CSV_PATH = path.join(__dirname, 'csv/hw1.csv');
const TXT_PATH = path.join(__dirname, 'txt/hw1.txt');

const consoleProcessor = new ConsoleProcessor();
consoleProcessor.consoleReverse();

const csvProcessor = new CsvProcessor();
csvProcessor.convertCsvToJson(CSV_PATH)
    .then(data => csvProcessor.writeJsonTxtFile(TXT_PATH, data))
    .catch((err) => console.log(`Sorry we have an error(( ${err}`));