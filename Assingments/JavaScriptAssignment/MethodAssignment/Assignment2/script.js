
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
