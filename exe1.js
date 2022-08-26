'use strict';

/*1. 
Create a function that takes two numbers as arguments and returns their sum.
*/

const sum=(num1,num2)=>typeof num1=='number'&&typeof num2=='number'? num1+num2:'enter numbers';


/* 
2. Write a function that takes an integer minutes and converts it to seconds.
 */

//declare a function with one argument (minutes)
//have it return product of minutes and number of seconds in a minute(60)

const toSeconds=(min)=>typeof min=='number'?min*60:'only enter numbers';

/* 
3. Create a function that takes a number as an argument, increments the number by +1 and returns the result. 
*/
//a function only takes in an integer,display error message
//if an integer has not been passed in
//it returns the value of:integer +1;

const next=int=>int===Math.trunc(int)?int+1:"please enter an integer";

/*
4.Write a function that takes the base and height of a triangle and return its area.
 */

//area of a triangle is calculated with the following formula:(base * height) / 2;
//create a function which takes in the values of the base and the height,and returns the formula;

const triangle=(base,height)=>typeof base=='number'&&typeof height=="number"?(base * height) / 2:'please enter the parameters';

/*
5.Create a function that takes the age in years and returns the age in days.
*/

//a year has 365 days
//create a function that takes in an argument for years and returns :years*365;
//argument has to be a positive integer;

const days=years=>years===Math.abs(Math.trunc(years))?years*365:'Please enter a positive  number';

/*
6. Create a function that takes an array containing only numbers and return the first element.
*/

//a function with an array as an argument(else error message);
//display the first element of the array;

const first=arr=>Array.isArray(arr)?arr[0]:"please enter an array";


/*
7. Create a function that takes voltage and current and returns the calculated power.
*/

const power=(voltage,current)=>typeof voltage=='number' && typeof current=='number'?voltage*current:"enter the parameters";

/*
8. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
*/

//(side1 + side2) - 1 = maximum range of third edge;
//The side lengths of the triangle are positive integers;
//create a function with two arguments:side1 and side 2;
//provided that the parameters are positive integers return the former formula;

const range=(side1,side2)=>side1===Math.abs(Math.trunc(side1)) && side2===Math.abs(Math.trunc(side2))?
(side1 + side2) - 1 :"please enter the parameters";

/*
9. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

*/
//create a function which takes in two arguments;
//provide the parameters passed are numbers,use the modulus operator to find the remainder of their division;

const remainder=(num1,num2)=>typeof num1=='number' && typeof num2 =='number'?num1%num2:"please enter the parameters";

/*
10. Create a function that takes length and width and finds the perimeter of a rectangle.
*/

//create a function with two arguments (length and width);
//provide the parameters passed are numbers,return 2*( length + width);

const perimeter=(length,width)=>typeof length==="number" && typeof width==='number'?2*(length + width):"please enter the parameters";

/*
11. Write a function that returns the string "something" joined with a space " " and the given argument a.
*/
//create a function with a string as an argument
//concatanate the string 'something' with the given string passed;

//const something=str=>'something'.concat(' ',str)
const something=str=>`something ${str}`;


/*
12. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
*/

const less=num=>typeof num==='number'?num<=0:"Enter a number";

/*
13. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
*/
/*the task is to calculate the total amount of points :total amount of two point shots*2 + total amount of three point shots*3*/
//
const points=(doublePoints,triplePoints)=>doublePoints*2+triplePoints*3;

/*
14. Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
*/

//create three functions,each taking numbers as arguments
//in each function turn numbers into their binary represantations
//perform bitwise AND,OR and XOR of both representations

const bitwiseAND=(num1,num2)=>(num1&num2).toString(2);
const bitwiseOR=(num1,num2)=>(num1|num2).toString(2);
const bitwiseXOR=(num1,num2)=>(num1^num2).toString(2);

/*
15. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

const upTo=num=>{
    let sum=0;
    for (let i = 1; i <=num; i++) {
       sum+=i;
        
    }
    return sum;
};


/*
https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

16.Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
*/

const matchsticks=step=>step*6-(step-1);


/*
17. Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
*/

//create a function which takes in two numbers
//first number is to be multiplied by 2 to the power of the second number

const shift=(num1,num2)=>typeof num1==='number'&& typeof num2==="number"?num1*2**num2:'please enter numbers';

/*
 18. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

//create a function which takes in an array as an argument(else error message);
// function returns new array with two values calculated by Math.min and Math.max functions;

//const minMax=arr=>Array.isArray(arr)?[Math.min(...arr),Math.max(...arr)]:'please enter an arry of numbers';
const minMax=arr=>{
let arr1=arr.sort((a,b)=>a-b);
return [arr1[0],arr1[arr1.length-1]];
}

/*
19. Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
*/

//create a function which takes a date as an argument
//check if it's a date; Object.prototype.toString.call(date) === '[object Date]';
//check if the month and date match christmas eve(24th of december);

const christmas=date=>Object.prototype.toString.call(date) === '[object Date]'?date.getMonth()===11 &&date.getDate()===24:"please enter a date";

/*
20. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
*/

const two=(f,g)=> f > g ?'f':f<g ?'g':"neither";

/*
21.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
*/

//loop over the main string to match the character matching the first string;

const instance=(str1,str2)=>{
    let amount=0;
    for (let i = 0; i < str2.length; i++) {
        if (str2.charAt(i)===str1){
         amount+=1;
        }
        
    }
    return amount;
}




