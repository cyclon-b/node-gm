import * as fs from 'fs';
import * as csvtojson from 'csvtojson';


export class CsvProcessor {

    convertCsvToJson(pathToFile) {
        return csvtojson().fromFile(pathToFile).subscribe((json) => {
            return new Promise((resolve, reject) => {
                resolve(json);
                reject('UnexpectedError');
            });
        });
    }

    writeJsonTxtFile(outputPath, jsonData) {
        fs.appendFile(outputPath, JSON.stringify(jsonData), () => {})
            .then(() => console.log(`File hw1.txt was appended`)).catch(err => console.log(`Sorry we have an error(( ${err}`));
    }
}