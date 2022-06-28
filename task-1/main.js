const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let input = result.input; 
    let numbers = input.split(','); 
    let a = parseInt(numbers[0]); 
    let b = parseInt(numbers[1]); 
    let c = parseInt(numbers[2]); 

    console.log(Math.min(Math.min(a,b),c));
});
