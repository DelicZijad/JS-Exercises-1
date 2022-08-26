'use strict';

/*
1.Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
*/
//a function takes in an array of integers 
//converts every integer into its absolute value(arrray.map)
//ads all the abssolite values up (arr.reduce);

const abs=arr=>arr.map(x=>Math.abs(x)).reduce((a,b)=>a+b,0);

/*
2.Create a function that takes an array of strings and return an array, sorted from shortest to longest.
*/
//a function takes in an array of strings(check with arr.every);
//loop over the array to get the lengths of the strings and sort them (arr.sort);

const sortByLength=arr=>arr.every(x=>Object.prototype.toString.call(x) === "[object String]")?arr.sort((a,b)=>a.length-b.length):'only enter strings';


/*
3.Create a function that takes a string and returns the number (count) of vowels contained within it.
*/
//a function takes in a string;
//using regEx search for vowels;
//display the number of vowels(arr.filter);

const countVowels=str=>str.split('').filter(x=>/[aeiou]/gi.test(x)).length;

/*
4.Create a function that takes a string and returns a string in which each character is repeated once.
*/
//a function takes in a string(check);
//turn the string into an array
//with arr.map create a new array and double every character
//empty spaces count as characters;

const doubleChar=str=>str.split('').map(x=>x.repeat(2)).join('');

/*
5.Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

Sort numbers array in ascending order.
If the function's argument is null, an empty array, or undefined; return an empty array.
Return a new array of sorted numbers.
*/
//a function takes in an array of numbers(check with arr.every);
//first check of array is empty or the input is null or undefined with  negation(!);
//if all is check sort in ascending order with arr.sort();

const sortNumsAscending=arr=>{
    if(!arr){
return []
    }
   
    return arr.every(x=>typeof x==='number')?arr.sort((a,b)=>a-b):"only enter numbers"
}


/*
6.Create a function that takes a string and returns a new string with all vowels removed.
*/

//function takes in a string (check);
//convert into an array and use arr.filter to only get non vowels;
//turn the array back into a string;

const removeVowels=str=>{
    if(Object.prototype.toString.call(str) !== "[object String]"){
        return 'enter a string'
    }

    return str.split('').filter(x=>!/[aeiou]/gi.test(x)).join('').trim()
}

/*
7.Create a function that returns the index of the first vowel in a string.
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel.
*/

//solution 1:loop over the string
//the first char that matches a vowel(display index)
/*
const firstVowel=str=>{
    let index;
    for (let i = 0; i < str.length; i++) {
        let x=str.charAt(i-1);//check for vowel in the previous char!//
      if(/[aeiou]/gi.test(x) ) break;
            index=i
    }

    return index;
}
*/

//solution 2:use array method arr.findIndex();

const firstVowel=str=>str.split('').findIndex(x=>/[aeiou]/gi.test(x));



/*
8.Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P

The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch.
*/

//create an object with words as properties,and emoticons as values;
//loop over the string and loop over the object to check if the string contains one of the properties;
const words={
'smile':':D',
'grin':':)',
'sad':":(",
"mad":':P'
}

const emotify=str=>{
    let arr=str.split(' ')
    return arr.map(x=>{
        let y;
        for (const word in words) {
            if (x===word){
                    y=words[word]
                }
            }
        return y||x;
    }).join(' ')
}


/*
9.Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
*/

//a function takes in multiple arrays;
//from each extract the maximum number and create a new array with only those numbers;
//use arr.map and Math.max;

const findLargestNums=arr=>arr.map(subArr=>Math.max(...subArr));


/*
10.A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
*/

//sort the input array and turn it into a set(new Set(arr));
//turn the set back into an array;

const set=arr=>{
   let sorted= arr.sort((a,b)=>a-b);
let extract=new Set(sorted);
return [...extract]
}


/*
11. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

*/

//turn the array into a string(arr.join(''));
//extract parts of the string with str.substring method;
//with template literals return a new string ;

const formatPhoneNumber=arr=>{
    let str=arr.join('');
    let start=str.substring(0,3);
    let middle=str.substring(3,6);
    let end=str.substring(6);
    return `(${start}) ${middle}-${end}`
}

/*
12. Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
*/

//turn the string into an array;
//check if every member of array starts with a capital letter;

const checkTitle=str=>{
    let arr=str.split(' ');
    const func=word=>word.charAt(0)===word.charAt(0).toUpperCase();
    return arr.every(func);
}

/*
13.Create a function that takes two arrays and insert the second array in the middle of the first array.
*/

//use the spread operotor to get the elements out of the second array;
//use the destructuring to create a new array->;
// with the second one in the midddle of the first one;

const tuckIn=(arr1,arr2)=>{
let [first,second]=arr1;
   return [first,...arr2,second];
}

/*
14.Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators
*/

const flip=x=>1-x;

/*
15.Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
All numbers will be integers.
You can expect negative numbers too.
*/

//if the number is even both halves will be the original number divided by 2;
//if the number is odd the first half will be (num-1)/2 and the other (num+1)/2;

const numberSplit=num=>num%2===0?[num/2,num/2]:[(num-1)/2,(num+1)/2];

/*
16.Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
Zero is a non-negative integer.
The given array only has integers and strings.
Numbers in the array should not repeat.
The original order must be maintained.
*/

const filterArray=arr=>{
    let filt=arr.filter(x=>typeof x==="number"&&x>=0);
    return [...(new Set(filt))]
};

/*
17.Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

Must only contain numbers (no non-digits allowed).
Must not contain any spaces...
Must not be greater than 5 digits in length.
*/

//turn the string into an array,split by nonspace('');
//check if the length is 5 or less;
//check if every element is a number(positive);
//no white space allowed;

const isValid=str=>{
    let arr=str.split('');
    return arr.every(x=>x==Number(x)&&x!==' ') && arr.length<=5;
}

/*
18.Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

A single printed page requires each color once, so printing is not possible if any of the slots lack ink 
*/

//extract values from the object ith object.values() method;
//look for the smallest of the values;

const inkLevels=obj=>{
    let values=Object.values(obj);
    return Math.min(...values)
}

/*
19.Create a function that returns true if the first array is a subset of the second. Return false otherwise.

Both arrays will contain only unique values.
*/

//loop over the arrays ;
//if every member of the first array is in the second one then return true;

const isSubset=(arr1,arr2)=>{
    let compare=[];
    arr1.forEach(x=>arr2.forEach(y=>{
        if(y===x)compare.push(x)
    }))
return compare.length===arr1.length
}

console.log(isSubset([1, 2], [3, 5, 9, 1]));