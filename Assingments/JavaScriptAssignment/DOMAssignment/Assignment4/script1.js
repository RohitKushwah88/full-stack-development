 const courses = document.querySelectorAll(".course");

        courses.forEach(function(course) {
            document.getElementById("output").innerHTML +=
                course.textContent + "<br>";
        });
        

        document.getElementById("total").textContent =
            "Total Courses: " + courses.length;

        const unavailable = document.querySelectorAll(".unavailable");


        document.getElementById("unavailable").textContent =
            "Unavailable Elements: " + unavailable.length;

