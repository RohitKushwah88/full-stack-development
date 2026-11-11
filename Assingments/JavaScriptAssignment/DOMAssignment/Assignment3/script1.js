let title = document.getElementById("courseTitle");
        let duration = document.getElementById("courseDuration");

        if (title !== null && duration !== null) {
            console.log("Course Title: " + title.textContent);
            console.log("Course Duration: " + duration.textContent);
        }

        let courseFee = document.getElementById("courseFee");

        if (courseFee !== null) {
            console.log(courseFee.textContent);
        } else {
            console.log("Course fee information not found.");
        }

        let wrongTitle = document.getElementById("coursetitle");

        if (wrongTitle !== null) {
            console.log(wrongTitle.textContent);
        } else {
            console.log("Element not found. ID is case-sensitive.");
        }
