let message = document.getElementById("welcomeMessage");

    message.classList.add("highlight");

    message.classList.add("important");


     let checkHighlight = message.classList.contains("highlight");

    let checkImportant = message.classList.contains("important");


    console.log("Contains highlight:", checkHighlight);

    console.log("Contains important:", checkImportant);


     message.classList.remove("highlight");

    console.log("Contains highlight:", message.classList.contains("highlight"));
        
     console.log("Contains important:", message.classList.contains("important"));
