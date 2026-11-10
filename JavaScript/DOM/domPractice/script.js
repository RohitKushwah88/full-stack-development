

const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");


let  flag= true;

btn.addEventListener("click",()=>{

    if(flag){
        bulb.style.backgroundColor= "red";
    btn.textContent="off";
    flag = false;
   }else{
       bulb.style.backgroundColor= "transparent";
    btn.textContent="on";
    flag = true;
   }
    // bulb.style.backgroundColor= "red";
    // btn.textContent="off"
    
})