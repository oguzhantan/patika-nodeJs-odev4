const fs = require('fs');

fs.writeFile('employees.json','[',function (err){
    if(err) throw err;
    console.log('File is created successfully.')
})

fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', function (err) {
    if (err) throw err;
    console.log('Saved!');
})

fs.appendFile('employees.json', ',{"name": "Employee 2 Name", "salary": 3000}', function (err) {
    if (err) throw err;
    console.log('Saved!');
})

fs.appendFile('employees.json',']',function (err){
    if(err) throw err;
    console.log('File is created successfully.')
})

fs.readFile('employees.json', 'utf8', (err, data) => { 
    if (err) console.log(err);                         
    console.log(data);                                 
})

/*fs.rm('employees.json',{ recursive: true }, (err) =>{
    if (err) console.log(err);
    console.log("File is deleted")
})*/