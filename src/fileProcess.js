import fs from 'fs';

fs.readFile('fileProcess.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }

    const lines = data.split('\n');
    const variables = {}

    lines.forEach(line => {
        if(line){
            const [key, value] = line.split('=');
            variables[key] = Number(value);
        }
    })

    console.log(variables);
    let sum += Object.values(variables)
})