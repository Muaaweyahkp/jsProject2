const prompt = require("prompt-sync")({sigint:true});

let num = prompt(`Enter a number = `) ;

if (isNaN(num)){
    console.log(`wrong input`);
}
else if (num == 0){
    console.log(`it's a zero`);
}
else if( num %2 == 0){
    console.log(`number is even`);
}
else if( num %2 != 0){
    console.log(`number is odd`)
}