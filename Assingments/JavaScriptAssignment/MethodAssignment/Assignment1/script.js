
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
