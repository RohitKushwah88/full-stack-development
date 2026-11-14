 const heading = document.querySelector("#courseCard h2");

        const parent = heading.parentElement;

        const totalChildren = parent.children.length;

        const firstChild = parent.firstElementChild;

        const lastChild = parent.lastElementChild;

        const paragraph = heading.nextElementSibling;

        paragraph.textContent = "Course status: Enrollment Open";

        const button = paragraph.nextElementSibling;

        document.getElementById("result").innerHTML = `
            <h3>DOM Traversal Results</h3>
            <p>Parent Element: ${parent.id}</p>
            <p>Total Child Elements: ${totalChildren}</p>
            <p>First Child: ${firstChild.textContent}</p>
            <p>Last Child: ${lastChild.textContent}</p>
            <p>Updated Paragraph: ${paragraph.textContent}</p>
            <p>Button Text: ${button.textContent}</p>`;