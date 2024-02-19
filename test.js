const letters='ABDEFGHIJKLMNOQRTUVWXYZabdefghijklmnoqrtuvwxyz'
const numbers='0123456789'
const symbols = '+-_$~'

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function isLetter(item){
     let result=false;
     
     for(let i=0; i<letters.length; ++i){
         if(letters[i]===item) {
             result=true
         }
     }
     
     return result
}

function isNumber(item){
     let result=false;
     
     for(let i=0; i<numbers.length; ++i){
         if(numbers[i]===item) {
             result=true
         }
     }
     
     return result
}

function getRandomString(num){
    let result='';
    
    if(num!==NaN){
    let values = letters+numbers+symbols;
 
    for(let i=0; i<num; ++i){
        result+=values[getRandomNum(values.length)]
    }}
    
    return result;
}

function replaceLetters(letter, string, count){
    let result='';
    for(let i=0; i<string.length; ++i){
       if(isLetter(string[i])) {
           result+=letter
           count.FirstSymbol++
       }
       else {
           result+=string[i]
       }
    }
    return result;
}

function replaceNumbers(letter, string, count){
    let result='';
    for(let i=0; i<string.length; ++i){
       if(isNumber(string[i])) {
           result+=letter
           count.SecondSymbol++
       }
       else {
           result+=string[i]
       }
    }
    return result;
}

var randomString, newString1, newString2
var num, symbol1, symbol2
const count={
        FirstSymbol:0,
        SecondSymbol:0,
        other:0
};

num = prompt("Введите число:");
randomString  = getRandomString(parseInt(num))
console.log(randomString)

if(randomString){
symbol1 = prompt("Введите символ:");
newString1=replaceLetters(symbol1, randomString, count)
console.log(newString1)
}

if(newString1){
symbol2 = prompt("Введите символ:");
newString2=replaceNumbers(symbol2, newString1, count)
console.log(newString2)
}

count.other = parseInt(num) - count.FirstSymbol - count.SecondSymbol
console.log(count)
