
// const h3= document.querySelector("#id1");

// let res = h3.getAttribute("class");
// console.log(res);

// const box1= document.querySelector(".box1");
// const box2= document.querySelector(".box2");
// const box3= document.querySelector(".box3");

const main = document.querySelector("main");

const box1= document.createElement("div");
const box2= document.createElement("div")
const box3= document.createElement("div")


box1.classList.add("box");
box2.classList.add("box");
box2.style.backgroundColor="yellow"
box3.classList.add("box");
box3.style.backgroundColor="blue"
main.append(box1)
main.append(box2)
main.append(box3)

//prepend ka mtb hota h sabke pehele insert ,place add kar do whatever happend

// main.before(box2)


// box2.style.backgroundColor="yellow";
// box3.style.backgroundColor="blue";

// main.insertBefore(box2,box1)