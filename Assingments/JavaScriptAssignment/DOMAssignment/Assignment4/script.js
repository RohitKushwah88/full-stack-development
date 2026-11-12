let  heading = document.querySelector("h1");

let announcement = document.querySelector(".announcement");

let course = document.querySelector("#courseInfo");
let missing = document.querySelector(".missing");

document.querySelector("#result").textContent="heading:"+heading.textContent+"\n"
+"announcement:"+announcement.textContent+"\n"
+"course info:"+course.textContent+"\n"+
"missing element:"+(missing? missing.textContent:"element not found");

