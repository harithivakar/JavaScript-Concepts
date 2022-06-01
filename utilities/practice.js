//fibonacci series
const fibonacciSeries = (num) => {
    let a = 0, b = 1;
    let sum;

    console.log(a + '\n' + b);

    for(let i = 2; i < num; i++){
        sum = a + b;
        a = b;
        b = sum;
        
        // console.log(sum);
    }

} 

console.log(fibonacciSeries(4));





//sum of fibonacci

const fibonacci = (num) => {
    let a = 0, b = 1, sum;

    for(let i = 0; i < num; i++){
        sum = a + b;
        a = b;
        b = sum;
    }

    return b;
}

console.log(fibonacci(4));





//factorial

const factorial = (num) => {

    let result = num
    if(num === 0 || num === 1){
        return 1;
    }

    while(num > 1){
        num--;
        result *= num;
    }

    return result;
}

console.log('Factorial of 4: ' + factorial(4));






//Palindrome

var str = ["Malayalam", "Kayak", "Good", "Hello", "World", "Wow"];

function Palindrome(str) {
    var reverseStrArray= [];
    let elm;

    for(let i = 0; i < str.length; i++) {
        elm = str[i].toLowerCase();
        let reverseStr = elm.split('').reverse().join('');

        
        if(reverseStr == elm){
            reverseStrArray.push(elm);

            // reverseStr += elm+',';
        }
    }

    return reverseStrArray;
}

console.log(Palindrome(str));


//Palindrome string - method 2

function reverse(str) {
    let reverseStr = '';
    for( let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }

    return reverseStr;
}

const Palindrome2 = (str) => {
    let reverseArr = [];
    let elm;

    for(let i = 0; i < str.length; i++) {

            elm = str[i].toLowerCase();
            let reverseStr = reverse(elm);

        console.log(reverseStr);

        if(reverseStr === elm){
            reverseArr.push(elm);
        }
    }
    return reverseArr;
}

console.log(Palindrome2(str));



//Palindrome Number/string


var input = 'MAlayalam 6886';

function PalindromeInput(str) {
    // let lowerStr = str.toLowerCase();

    // var input = 'MAlayalam was good 6886 sport';

    let splits = str.toLowerCase().split(" ");

    let reverseArr = [];
    let elm;

    for(let i = 0; i < splits.length; i++) {

        elm = splits[i]

            let reverseStr = reverse(elm);

        // console.log(reverseStr);

        if(reverseStr === elm){
            reverseArr.push(elm);
        }
    }
    return reverseArr;



    // let reverseStr = str.toLowerCase().split('').reverse().join('');
    // return reverseStr === str.toLowerCase() ? 'Palindrome' : 'Not a Palindrome';
}


console.log(PalindromeInput(input));






//Min and Max in an array

var arr = [12,14,17,16,20,1,22,23];

function minMax(data) {

    // var data = data.sort((a, b) => a - b);
    var min = Math.min.apply(null, data);

    var max = Math.max.apply(null, data);


    return `Minimum Value: ${min} and Maximum Value: ${max}`;

    console.log(data);
}

console.log(minMax(arr));

function minMaxBasic(data) {

    let maxArr = [];
    let minArr = [];
    let elm;
    // data = data.sort((a, b) => a - b);

    for(let i = 0; i < data.length; i++){

        elm = data[i];

        // console.log(elm);

        if(data[ i + 1] < data[i]){
            minArr.shift(elm);
            minArr.push(data[i + 1]);
        }

        if(data[i + 1] > data[i]) {
            // maxArr.push(elm);
            maxArr.shift(elm);
            maxArr.push(data[i + 1]);
        }
        
    }

    return `Minimum Value in provided Array: ${minArr} and Maximum value in provided Array: ${maxArr}`;
}

console.log(minMaxBasic(arr));
