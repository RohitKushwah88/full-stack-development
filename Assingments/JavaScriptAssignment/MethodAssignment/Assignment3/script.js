
   
// assignment 3 maths wale 

/*RICR Student Marks Analyzer
Create a JavaScript program that analyzes student marks using the Math object and basic mathematical operators.

Your program should include:

Create an array named marks containing at least five students' marks, including some decimal values.
Use Math.round(), Math.floor(), Math.ceil(), and Math.trunc() to demonstrate different ways of handling a decimal mark.
Use Math.min(...marks) to display the lowest mark and Math.max(...marks) to display the highest mark.
Use Math.abs() to display the absolute value of a negative difference between two marks.
Use the addition, subtraction, multiplication, division, and remainder operators with suitable sample marks.
Use Math.sign() to identify the sign of a positive number, a negative number, and zero.
Display all results using console.log().
Add comments explaining the purpose of each Math method and mathematical operator.*/

let marks = [67,88,99.3,88.3,44,7];
console.log(marks);


let mark = 67.3;
console.log(Math.round(mark));
console.log(Math.round(mark));
console.log(Math.floor(mark));
console.log(Math.ceil(mark));
console.log(Math.trunc(mark));

console.log(Math.min(...marks));
console.log(Math.max(...marks));

let difference = 65 - 85;
console.log( difference);

console.log( Math.abs(difference));


// math operation

let a=90;
let b=87;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);


console.log( Math.sign(10)); 
console.log( Math.sign(-10)); 
console.log( Math.sign(0));


//  2 wala 3 KeyboardEvent;

 let radius = 5;
console.log("Value of PI:", Math.PI);
 let circumference = 2 * Math.PI * radius; 
 console.log("Circle Circumference:", circumference);
 console.log("Square of Radius:", Math.pow(radius, 2)); 
 console.log("Square Root of 25:", Math.sqrt(25)); 
console.log("Square Root of -25:", Math.sqrt(-25));
 console.log("Cube Root of 27:", Math.cbrt(27));


let sideA = 3; let sideB = 4;
 let hypotenuse = Math.hypot(sideA, sideB); 
 console.log("Triangle Hypotenuse:", hypotenuse); 
 console.log("2 raised to power 3:", 2 ** 3);
 console.log("Sign of 10:", Math.sign(10)); 
 console.log("Sign of -10:", Math.sign(-10));
  console.log("Sign of 0:", Math.sign(0));



  
  function sum(...n){
    return n.reduce(( result=0 , num) => (result+= num))
  }

const result =sum(3,5,6,85,4,3,32);
 console.log(result);
 



   function mul(...m){
    return m.reduce((result =0, num) => (result*= num))
   }


   const  ans =[4,6,5,4,3,2]; 
   console.log(...ans);
   
   


