 
 

     //    its is called querySelector 
    // first topic'; 
 
      
 var a= document.querySelector("h1"); 
 console.log(a);
 
 var b= document.querySelector("h2");
 console.log(b);

 var c= document.querySelector("h3")
 console.log(c);

 var d = document.querySelector("h4");
 console.log(d);

 var e= document.querySelector("h5");
 console.log(e);

//  Changing html'

 var a = document.querySelector("h1");

 a.innerHTML= "changed html"

 var b =document.querySelector("h2")

 b.innerHTML= "focus bro";
 
 var c = document.querySelector("h3");
 c.innerHTML= "padhaai first always"

 var d = document.querySelector("h4")

 d.innerHTML="second pe kuchh or like😉😉😉"


 //DONO EK HATH 


 var a= document.querySelector("h1");
 a.innerHTML= "DOM HAI BHAIYA YEH PADH LO" 

//  css changes now;

var a= document.querySelector("h2")
a.style.color="blue"
a.style.background="red"

var b= document.querySelector("h3");
b.style.backgroundColor="darkblue"


//  event listener 4th topic 

var a= document.querySelector("h2");
a.addEventListener("click",function(){

   console.log("ho rhi h padhai");
   
})
 
var b = document.querySelector("h4")
b.addEventListener("click",function(){
   b.innerHTML= "hai kar raha hu bhai me padhai"
   b.style.color= "yellow"
   b.style.backgroundColor="red"
})


var c= document.querySelector("h3")
c.addEventListener("click",function(){
   c.innerHTML="jadu change ho ja ab fata fat"
   c.style.color="pink"
   c.style.backgroundColor="green"
   
})





    // for pillar distroy now 

    // MOVE TO THE NEXT Topic

 
     var bulb = document.querySelector("#bulb")
    var btn = document.querySelector("button")
     var flag=0;


     btn.addEventListener("click",function(){
      if(flag==0){
         
         bulb.style.backgroundColor="yellow"
         console.log("clicked");
         flag=1;
         
      }else{
         bulb.style.backgroundColor="transparent"
         console.log("again clicked");
         flag=0
         
      }
     })

   //   another bulb

   var a = document.querySelector("#bulb1")
   var btnn= document.querySelector("button")

   var light =0;

   btnn.addEventListener("click",function(){
      if(light==0){

         bulb1.style.backgroundColor="red"
         console.log("click");
         light=1;

         
      }else{
         bulb1.style.backgroundColor="transparent"
         console.log("again clicked");
         light=0;
         
      }
   })
     
    
 let h= document.querySelectorAll("h1")
 console.log(h);
 

 h.forEach(function(e){
   console.log(e);
   
 })

 