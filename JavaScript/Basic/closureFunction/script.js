

function Greetings(name){
      return function(){
        console.log("welocme to Sirt!!!", name);
        
      };
}

const GreetRohit =Greetings("rohit");
const greetSujal= Greetings("sujal");


GreetRohit();
greetSujal();