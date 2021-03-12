const csvtojson = require('csvtojson/v2');
const fs = require('fs');
const path = require('path')
const CSV_PATH = path.join(__dirname, 'csv/hw1.csv');
const TXT_PATH = path.join(__dirname, 'txt/hw1.txt');

const convertCsvToJson = (pathToFile) => {
    return csvtojson().fromFile(pathToFile).subscribe((json) => {
        return new Promise((resolve, reject) => {
            resolve(json);
            reject('UnexpectedError');
        })
    })
};

const writeJsonTxtFile = async (jsonData) => {
    await fs.appendFile(TXT_PATH, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log(`Sorry we have an error(( ${err}`)
        }
        console.log(`File hw1.txt was appended`);
    });
}


convertCsvToJson(CSV_PATH).then(json => writeJsonTxtFile(json)
).catch((err) => console.log(`Sorry we have an error(( ${err}`));