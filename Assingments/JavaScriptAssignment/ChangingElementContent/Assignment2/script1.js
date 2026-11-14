const courseName = "JavaScript";
const courseDuration = "3 Months";
const courseDescriptionText = "Learn JavaScript from basics to advanced.";

        const courseCard = document.getElementById("courseCard");

        courseCard.innerHTML = `
            <h2>${courseName}</h2>
            <p>Duration: ${courseDuration}</p>
        `;

        const description = document.getElementById("courseDescription");

        description.textContent = courseDescriptionText;

        const markupDemo = document.getElementById("markupDemo");

        markupDemo.textContent = "<strong>JavaScript Training</strong>";

        markupDemo.innerHTML = "<strong>JavaScript Training</strong>";

        // part 2 tha 