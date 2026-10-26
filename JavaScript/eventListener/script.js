
const showAssBtn = document.getElementById("showAssignmentNotification");

const showAttBtn = document.getElementById("showAttandanceNotification");

const stopwAssBtn = document.getElementById("StopAssignmentNotification");

// paragraph

const asspara = document.getElementById("AssignmentNotification");

const attpara = document.getElementById("AttendanceNotification");

 function showAssigment(){
    asspara.para.textContent =" Your assigment deadline is approaching";
 }


 showAssBtn.addEventListener("click", showAssigment);

 showAttBtn.addEventListener("click", () =>{
    attpara.textContent="plese check your attandance status"
 });

 stopwAssBtn.addEventListener("click", () => {
    showAssBtn.removeEventListener("click",showAssigment);

    // showAttBtn.removeEventListener("click", () => {
    //     attpara.textContent="pls check ur attandance status"
    // })

      asspara.textContent="stop ";  
 })

 const  parent = document.getElementById("outer")

 const  child = document.getElementById("inner")

 parent.addEventListener("click",() =>
     {
    console.log("parents Clicked");
    
   });

 child.addEventListener("click",() =>{
    console.log("parents Clicked");
    
 });





