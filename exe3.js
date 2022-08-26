'use strict';

/*
 Write a function that takes a value as argument;
 Return the type of the value;
*/

const type=value=>typeof value;

// Write a function that takes an object with two properties as argument;
// It should return the value of the property with key country;

const country=obj=>obj.country;


// Write a function that takes an array (a) as argument
// Return the number of elements in a

const elements=arr=>arr.length;


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const same=(a,b)=>a===b;


// Write a function that takes a string (a) and a number (n) as argument;
// Return the nth character of 'a';

const nth=(a,n)=>a.charAt(n-1);


// Write a function that takes a string as argument;
// Extract the last 3 characters from the string;
// Return the result;

const extract=str=>str.slice(-3);


// Write a function that takes a string as argument;
// Create an object that has a property with key 'key' and a value equal to the string;
// Return the object;

const create=str=>{
    const obj={
        key:str
    }
    return obj
}


// Write a function that takes an array (a) as argument;
// Extract the first 3 elements of a;
// Return the resulting array;

const ext=a=>a.slice(0,3);


// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a';

const myFunc=(a,b)=>a[n-1];


// Write a function that takes an object with two properties and a string as arguments;
// It should return the value of the property with key equal to the value of the string;

const func1=(obj,key)=>obj[key];



// Write a function that takes an array (a) as argument;
// Remove the first 3 elements of 'a';
// Return the result;

const remove=a=>{
    a.splice(0,3);
    return a;
};


// Write a function that takes an array of strings as argument;
// Sort the array elements alphabetically;
// Return the result;

const abc=arr=>arr.sort();


// Write a function that takes an object (a) and a string (b) as argument;
// Return true if the object has a property with key 'b';
// Return false otherwise;
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined;
// But the property itself exists;

const has=(a,b)=>b in a;



// Write a function that takes an object (a) and a string (b) as argument;
// Return true if the object has a property with key 'b', but only if it has a truthy value;
// In other words, it should not be null or undefined or false;
// Return false otherwise;

const func2=(a,b)=>!!a[b];


// Write a function that takes an array of numbers as argument;
// Return the number of negative values in the array;
//use arr.filter method to extract negative numbers;

const neg=arr=>arr.filter(num=>num<0).length;


// Write a function that takes two numbers (a and b) as arguments;
// If a is smaller than b, divide a by b;
// Otherwise, multiply both numbers;
// Return the resulting value;

//use the ternary operator;

const func3=(a,b)=>a<b?a/b:a*b;

// Write a function that takes a Set and a value as arguments;
// Check if the value is present in the Set;

//use set.has to determinue wheter the set contains the value;

const set1=(set,value)=>set.has(value);


// Write a function that takes an array (a) and a number (n) as arguments;
// It should return the last n elements of a;

//use array.slice;

const ext2=(a,n)=>a.slice(-n);

// Write a function that takes an array of numbers as argument;
// It should return the average of the numbers;

//use arr.reduce to find the sum;
//divide the sum by arr.length;

const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;


// Write a function that takes an object (a) as argument;
// Return an array with all object keys;

const keys=a=>Object.keys(a);

// Write a function that takes an array of strings as argument;
// Return the longest string;

//use arr.sort to sort the strings by length(descending order);
//use bracket notation to get the first element of the sorted array;

const longest=arr=>arr.sort((a,b)=>b.length-a.length)[0];


// Write a function that takes two strings (a and b) as arguments;
// Create an object that has a property with key 'a' and a value of 'b';
// Return the object;

const func4=(a,b)=>{
    const obj={};
    Object.defineProperty(obj,a,{
        value:b
    });

    return obj
};



// Write a function that takes an array (a) and a number (b) as arguments;
// Sum up all array elements with a value greater than b;
// Return the sum;

//use filter to check for condition;
//use reduce to get the sum;

const sum1=(a,b)=>a.filter(x=>x>b).reduce((a,b)=>a+b,0);

// Write a function that takes two date instances as argument;
// It should return true if the difference between the dates is less than or equal to 1 hour;
// It should return false otherwise;

//use getTime on both dates;
//supstract the two dates;
//turn the miliseconds to hours
//see if it's less or equal to an hour;

const hour=(a,b)=>{
    const diff=Math.abs(a.getTime()-b.getTime());
    const hours=diff/1000/60/60;

    return hours<=1;
    
}

// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

const union=(a,b)=>{
const comb=new Set();
a.forEach(elm=>comb.add(elm));
b.forEach(elm=>comb.add(elm));

return comb;

};


// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const equal=(a,b)=>a.getTime()===b.getTime();


// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

const days=(a,b)=>{
    const mls1=a.getTime();
    const mls2=b*24*60*60*1000;
    return mls1+mls2;
}


// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const exact=(a,b)=>a.getTime()===b.getTime();


// Write a function that takes a Date instance as argument;
// It should return the next nearest quarter hour in minutes;
// For example, if the given date has the time 10:01 the function should return 15;

const quarter=date=>{
    const minutes=date.getMinutes();
    let rounded=60;
    if(minutes<=15)rounded=15;
    else if (minutes<=30)rounded=30;
    else if (minutes<=45)rounded=45;
return rounded;
};


// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

//look for te first element of the array(arr[0]);
//check if every element equals the first;

const repeat=arr=>arr.every(elm=>elm===arr[0]);


// Write a function that takes two arrays as arguments;
// Merge both arrays and remove duplicate values;
// Sort the merge result in ascending order;
// Return the resulting array;

//create a set of merged arrays;
//turn the set back into an array;

const merge=(a,b)=>{
    const fusion=new Set([...a,...b]);
    return [...fusion].sort((a,b)=>a-b);
}


// Write a function that takes an array (a) and a value (b) as argument;
// The function should remove all elements equal to 'b' from the array;
// Return the filtered array;

const specific=(a,b)=>a.filter(x=>x!==b);

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const divisible=(x,y)=>{
    let next;
    if(x%y!==0){
        let i;
        for ( i = x; i < Infinity; i++) {
            if(i%y===0) break;
             next=i+1
        }
  
    }
    return next||x;
}

console.log(divisible(14,7));


// Write a function that takes an array of objects as argument;
// Sort the array by property b in ascending order;
// Return the sorted array;

const ascending=arr=>arr.sort((x,y)=>x.b-y.b);

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array


const insert=(arr,num)=>num<6?[0,...arr]:[num,...arr];



// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const cutOut=obj=>{
    delete obj.b;
    return obj;
}