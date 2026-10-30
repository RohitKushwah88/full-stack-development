
const Form= document.getElementById("login");

Form.addEventListener("submit",(e)=> {

    e.preventDefault();

const Form= document.getElementById("login");
    const loginFromData = new Form(Form);

    loginFromData.forEach((value, key ) => console.log(key,value));
    
})