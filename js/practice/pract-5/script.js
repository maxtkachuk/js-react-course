const lines = 5;
var space = '     ';
var result = '';

for(let i = 0; i < lines; i++){
    for(let j = 0; j < lines - i; j++){
        result += ' ';
    }

    for(let j = 0; j < 2 * i + 1; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);