
//    QUESTION 1

/*Create a variable named studentName containing a name with extra spaces and inconsistent letter casing, such as " rAHUL shARma ".
Use trim() to remove whitespace from both ends and toUpperCase() or toLowerCase() to format the name.
Create a variable named courseDescription containing a sentence about JavaScript.
Use charAt() and at() to display selected characters from the sentence.
Use slice() and substring() to extract different portions of the course description.
Use indexOf() and lastIndexOf() to find the positions of a word or character.
Use includes() to check whether the description contains "JavaScript".
Use startsWith() and endsWith() to check the beginning and ending of a sample filename.
Display the results of each operation using console.log().
Add comments explaining the purpose of the string methods used.*/

let studentName= "  rAHUL  shARma  ";

console.log(studentName.trim());
 console.log(studentName.toUpperCase());
 console.log(studentName.toLowerCase());

//QUESTION 2

const  courseDescription=  "JavaScript is easy to learn";

console.log(courseDescription.charAt(0));
console.log(courseDescription.at(2));
console.log(courseDescription.slice( 0, 9));
console.log(courseDescription.substring(11,16));
console.log(courseDescription.indexOf("easy"));
console.log(courseDescription.lastIndexOf("a"));
console.log(courseDescription.includes("JavaScript"));

let filename= "index.html";
console.log(filename.startsWith("index"));
console.log(filename.endsWith("html"));



/*RICR Course Description Processor
Create a JavaScript program that formats course descriptions, replaces text, combines strings, and splits course information into arrays.

Your program should include:

Create a variable named courseMessage containing a sentence in which the word "HTML" appears at least twice.
Use replace() to replace the first occurrence of "HTML" with "JavaScript".
Use replaceAll() to replace every occurrence of "HTML" with "JavaScript".
Use toUpperCase() and toLowerCase() to display the message in different letter cases.
Create two variables containing a greeting and a student group name, then combine them using concat().
Use repeat() to generate a separator containing at least five asterisks.
Create a comma-separated string of course names and use split(",") to convert it into an array.
Create a sentence containing several words and use split(" ") to separate it into an array of words.
Demonstrate trimStart() and trimEnd() on a string containing extra whitespace.
Display the original strings and the results of the operations in the console.
Add comments explaining that these string methods return new strings rather than directly changing the original strings.*/


let  courseMessage= "HTML is easy. I am learning HTML.";

console.log(courseMessage.replace("HTML","JavaScript"));
console.log(courseMessage.replaceAll("HTML","JavaScript"));
console.log(courseMessage.toUpperCase());
console.log(courseMessage.toLowerCase());

let name1= "rohit";
let name2 = "sujal";

console.log(name1.concat(name2));

let name3 = " rohitPro ";
console.log(name3.repeat( 10 ));

let courses = "HTML,CSS,JavaScript,Java";
 console.log("Course Array:", courses.split(","));

 let sentence = "I am learning JavaScript"; 
 console.log("Words Array:", sentence.split(" "));


   let text = " Hello Students ";
    console.log("Original Text:", text);
     console.log("Trim Start:", text.trimStart()); 
     console.log("Trim End:", text.trimEnd());







// Method Assignment

/*RICR Student Score & Fee Formatter
Create a JavaScript program that formats student scores and course fees using number methods.

Your program should include:

Create variables for a student's score, course fee, and attendance percentage using numeric values.
Use toString() to convert the student's score into a string and display its data type using typeof.
Use toLocaleString("en-IN") to format a large course fee according to Indian number-formatting conventions.
Use toLocaleString() with the currency option and "INR" to display the fee as Indian currency.
Use toFixed(2) to display a percentage with exactly two decimal places.
Use toPrecision() to format a numeric value using a specified number of significant digits.
Use toExponential() to display a large numeric value in exponential notation.
Display the original values and formatted results using console.log().
Add comments explaining which methods return strings and how the formatting methods differ.*/


// let Students= "RohitKushwah";
let Score= 78;
let courseFee= 220000;
let attendance= 76.34;
let number= 8827770507;

console.log("Original Score:",Score);


let scoreString = Score.toString();
console.log("Score as String:", scoreString);
console.log("Data type:",typeof scoreString);


console.log("CourseFes:",courseFee);
console.log("indian Format:",courseFee.toLocaleString("en-IN"));

console.log("Fee in INR:", courseFee.toLocaleString("en-IN", { style: "currency", currency: "INR" }));


console.log("attandance:",attendance);
console.log("attandance (2 decimal places):",attendance.toFixed(2));

console.log("Number:", number);
 console.log("Precision (5 digits):", number.toPrecision(5));


console.log("Exponential Format:", courseFee.toExponential());



// 2.2 Assignment


/*Your program should include:

Create variables containing an integer score, a decimal score, a numeric string, NaN, and Infinity.
Use Number.isInteger() to check whether selected values are integers.
Use Number.isNaN() and Number.isFinite() to check the appropriate numeric conditions.
Use Number.isSafeInteger() to check a regular integer and Number.MAX_SAFE_INTEGER.
Create numeric text values such as "85.75", "120px", and "hello".
Use Number.parseInt() and Number.parseFloat() to parse these text values.
Display the parsing results, including cases that return NaN.
Add comments explaining why "85" as a string does not pass Number.isInteger() and why parsing a numeric prefix does not guarantee that the entire input is valid.
Display all results using console.log().*/


let intScore = 85; 
let decimalScore = 85.75;
 let numericString = "85"; 
 let value = NaN;
  let infinityValue = Infinity;

 console.log(Number.isInteger(intScore));
  console.log( Number.isInteger(decimalScore));
   console.log( Number.isInteger(numericString));

   console.log(Number.isNaN(value));
   console.log(Number.isNaN(Score));

   console.log( Number.isFinite(intScore)); 
   console.log( Number.isFinite(infinityValue));
    console.log( Number.isFinite(value));

    console.log( Number.isSafeInteger(intScore));
     console.log(Number.MAX_SAFE_INTEGER); 
     console.log(  Number.isSafeInteger(Number.MAX_SAFE_INTEGER));


    //  6 text value;

    let text1 = "77.88";
    let text2 = "120px"
    let text3 = "hello";


    console.log(Number.parseInt(text1));
    console.log(Number.parseInt(text2));
    console.log(Number.parseInt(text3));
    

    console.log(Number.parseFloat(text1));
    
    console.log(Number.parseFloat(text2));
    
    console.log(Number.parseFloat(text3));

    
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
   
   





















 
