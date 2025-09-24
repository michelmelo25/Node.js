import fs from 'node:fs';
import { parse } from "csv-parse";

const csvFilePath = new URL('../../tasks.csv', import.meta.url);


async function main() {
    console.log('Starting CSV file processing...');
    console.log(csvFilePath.pathname);
    fs.createReadStream(csvFilePath)
    .pipe(parse({
        delimiter: ',',
        from_line: 2,
        columns: ['title', 'description'],
        trim: true
    }))
    .on('data', async (row) => {
        // console.log(row);
        await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            body: JSON.stringify(row),
            headers: { 'Content-Type': 'application/json' },
            duplex: 'half' 
        }).then(response => {
            return response.text()
        }).then(data => {
            console.log(data)
        })
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
}


main();




// fetch('http://localhost:3333/tasks', {
//     method: 'POST',
//     body: new ReadCSVStream(),
//     duplex: 'half' 
// }).then(response => {
//     return response.text()
// }).then(data => {
//     console.log(data)
// })