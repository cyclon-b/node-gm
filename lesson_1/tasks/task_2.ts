import * as csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';

const CSV_PATH = path.join(__dirname, 'csv/hw1.csv1');
const TXT_PATH = path.join(__dirname, 'txt/hw1.txt');
const readable = new stream.Readable();


const convertCsvToJson = (pathToFile): any => {
    return csv().fromFile(pathToFile).on('data', (data: object[]) => readable._read(64).push(data));
};

const writeJsonTxtFile =  () => {
    readable.on('data', (data) => console.dir(data))

//     fs.appendFile(TXT_PATH, JSON.stringify(jsonData), (err) => {
//         if (err) {
//             console.log(`Sorry we have an error(( ${err}`)
//         }
//         console.log(`File hw1.txt was appended`);
//     });
// }

// convertCsvToJson(CSV_PATH)
//     .then(json => writeJsonTxtFile(json))
//     .catch(err => `Sorry we have an error(( ${err}`);
}

convertCsvToJson(CSV_PATH);
writeJsonTxtFile();