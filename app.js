
const indexedCollection = require('./indexedCollections.js');

const aString = 'This is a string';

const anotherString = 'This is another string';

const mutatbility = 'Strings are immutable objects';



const longString = "This is an long string \
                    written just to test string \
                    use cases";




    //String Comparison

    const first = '2 + 2';
    const second = new String('2 + 2');

//   console.log(indexedCollection.lengthOfArray());

let myArray = new Array('1', '2', '3');
// console.log(myArray);
let newArray=new Array();
for(let i=1; i<=myArray.length;++i){
    const arrayLength = myArray.length;
    newArray.push(myArray[arrayLength - i]);
    
}
console.log(newArray);

console.log(newArray.map((el) => {return el;}).reverse());
