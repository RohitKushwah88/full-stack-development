
    

function showAlert(){
    alert("click me button ckicked using html events")
}

document.getElementById("clickbutton").addEventListener("click",showAlert2);


function showAlert2(){
    alert("click me button clicked using js events")

}

document.getElementById("box").addEventListener("click",()=> {
    document.getElementById("box").innerText ="the box is clicked"
})



//mouse 
document.getElementById("paragraph").addEventListener("mousedown",()=>{
    document.getElementById("paragraph").innerText="mouse button pressed"
})

document.getElementById("double").addEventListener("dblclick",() => {
    document.getElementById("double").innerText="you double-clicked this paragraph"
})

document.getElementById("move").addEventListener("mousemove",() =>{
    document.getElementById("move").innerText="mouse pointer is moveing over this text"
})


document.getElementById("nameSubmit").addEventListener("click",() => {
    console.log(document.getElementByIdFullName("FullName").value.trim());
    
})

document.getElementById("FullName").addEventListener("keydown", (e) => {
      
      e.key ==="Enter" &&
       console.log(document.getElementById("FullName").value.trim());
      

    
}) 