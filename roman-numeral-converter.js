//Works up to 9999.

function convertToRoman(num) { 
    let sundered =String(num).split('');
    let bound='';
    for(let i=0; i < sundered.length;i++){
        bound +=parseNumeral(sundered[i],sundered.length-i)
    }
    return bound;
}

function parseNumeral(input,place){
    let output='';
    let luminare='';
    let maiorem='';
    let summa='';
    switch(place){
    case 1:
        luminare='I';
        maiorem='V';
        summa='X';
        break;
    case 2:
        luminare='X';
        maiorem='L';
        summa='C';
        break;
    case 3:
        luminare='C';
        maiorem='D';
        summa='M';
        break;
    case 4:
        luminare='M';
        maiorem='V';
        summa='X';
        break;
    }
    if(input == 4){
        output+=luminare+maiorem;
    }
    else if(input == 9){
        output+=luminare+summa;
    }
    else if (input >= 5){
        input = input-5;
        output+=maiorem;
    }
    if(input < 4){
        output += luminare.repeat(input);
    }
    return output;
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));