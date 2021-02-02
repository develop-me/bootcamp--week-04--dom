(d => {
    // get the button
    let button = d.getElementById("button");

    // get the element to output paragraphs into
    let main = d.getElementById("main");

    // when the button is clicked
    button.addEventListener("click", () => {
        // create a new paragraph each time
        let p = d.createElement("p");
        // set the text of the paragraph
        p.textContent = "Clicked!";
        // append the paragraph to the document
        main.append(p);
    });
})(document);
