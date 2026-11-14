  const status = document.querySelector("#learning p");

        const heading = status.previousElementSibling;

        const progress = status.nextElementSibling;

        const parent = status.parentElement;

        status.textContent = "Status: In Progress";

        progress.textContent = "Progress: 25%";

        document.getElementById("result").innerHTML = `
            <h3>Learning Details</h3>
            <p>Heading: ${heading.textContent}</p>
            <p>Total Child Elements: ${parent.children.length}</p>
            <p>Updated Status: ${status.textContent}</p>
            <p>Updated Progress: ${progress.textContent}</p>
        `;