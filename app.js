const aString = 'This is a string';

const anotherString = 'This is another string';

const mutatbility = 'Strings are immutable objects';

console.log(aString +' '+ anotherString + ' '+ mutatbility);

console.log(anotherString.length);

console.log(anotherString[10]);

console.log(new String('Hello, World!'));


const longString = "This is an long string \
                    written just to test string \
                    use cases";

    console.log(longString);


    //String Comparison

    const first = '2 + 2';
    const second = new String('2 + 2');

    eval(first);

    console.log(second +'='+first);
