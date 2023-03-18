function getTimeFromMinutes(getMin){
    let hours = 0;
    let minutes = 0;
    if(typeof(getMin) !== 'number' || getMin < 0){
        console.log('Error! Uncorrect input number.');
    } else {
        hours = Math.floor(getMin / 60);
        minutes = getMin - hours * 60;

        switch(hours){
            case 1: 
                console.log(`It is ${hours} hour and ${minutes} minutes.`);
                break;
            default: 
                console.log(`It is ${hours} hours and ${minutes} minutes.`);
                break;
        }
    }
}

getTimeFromMinutes(0);

function findMaxNumber(a,b,c,d){
    let arr = [a, b, c, d];
    if(arr.length < 4 ||
       typeof(a) !== 'number' || 
       typeof(b) !== 'number' || 
       typeof(c) !== 'number' || 
       typeof(d) !== 'number')
    {
        console.log(0);
    } else {
        console.log(Math.max(...arr));
    }
}

findMaxNumber(1,2,4,5);