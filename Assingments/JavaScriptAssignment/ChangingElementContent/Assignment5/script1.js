let notice = document.getElementById("assignmentNotice");

     let toggleButton = document.getElementById("toggleButton");


     let checkButton = document.getElementById("checkButton");

      toggleButton.addEventListener("click", function() {
            notice.classList.toggle("highlight");
        });

     checkButton.addEventListener("click", function() {

   let status = notice.classList.contains("highlight");


     if (status) {
        console.log("Notice is highlighted");
          } else {
          console.log("Notice is not highlighted");
            }
        });