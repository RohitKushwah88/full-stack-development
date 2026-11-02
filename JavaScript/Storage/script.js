
// const Form1 = document.getElementById("form1");

// Form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(Form1);

//   //If-else Statement to check fullName Validity
//   const nm = formData.get("fullName");

//   //   let isValid = true;
//   //   for (var i = 0; i < nm.length; i++) {
//   //     if (
//   //       (nm.charAt(i) >= "A" && nm.charAt(i) <= "Z") ||
//   //       (nm.charAt(i) >= "a" && nm.charAt(i) <= "z") ||
//   //       nm.charAt(i) === " "
//   //     ) {
//   //       isValid = true;
//   //     } else {
//   //       isValid = false;
//   //       break;
//   //     }
//   //   }

//   //   if (/^[A-Za-z ]+$/.test(nm)) {
//   //     console.log("Valid Name");
//   //   } else {
//   //     console.log("Invalid Name");
//   //   }

//   console.log(/^[A-Za-z ]+$/.test(nm) ? "Valid" : "Invalid");
  
//   //   console.log(isValid ? "Valid" : "Invalid");
// });



const data = [
  {
    name1: "sujal",
    age: 20,
    course:"cse",
    gender: "male",
    study:[{projectname:"Cravings", timeline:2, role:"frond-end"}],
  },
  
//   {
//     name3: "sagar",
//     age: 20,
//     course:"mech",
//     gender: "male",
//     study:[{projectname:"newOne", timeline:6, role:"ppt"}],
//   },
  
];

const dataReadyToStore = JSON.stringify(data);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "RohitKushwah");
localStorage.setItem("your name","sujal")

const getLSData = localStorage.getItem("myNewData");
localStorage.removeItem("your")

document.querySelector("body").appendChild((document.createElement("div").innerText =getLSData));




  



