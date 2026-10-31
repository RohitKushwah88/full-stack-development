const From1= document.getElementById("form1");

From1.addEventListener("submit", (e) =>{
    
    const formData = new FormData(From1);
   
    const nm = formData.get("fullname");

    e.preventDefault();

    //  if(/^[A-Z])

    console.log(/^[A-Za-z]+$/.test(nm));
    //imcomplete hai abhi
    

    //if -else statement for check the fullName validation
     


});
