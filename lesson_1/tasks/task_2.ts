import * as csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';

const CSV_PATH = path.join(__dirname, 'csv/hw1.csv1');
const TXT_PATH = path.join(__dirname, 'txt/hw1.txt');

const convertCsvToJson = (pathToFile): any => {
    return csv().fromFile(pathToFile).then(conv => conv);
};

const writeJsonTxtFile =  (jsonData) => {
    fs.appendFile(TXT_PATH, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log(`Sorry we have an error(( ${err}`)
        }
        console.log(`File hw1.txt was appended`);
    });
}

convertCsvToJson(CSV_PATH)
    .then(json => writeJsonTxtFile(json))
    .catch(err => `Sorry we have an error(( ${err}`);