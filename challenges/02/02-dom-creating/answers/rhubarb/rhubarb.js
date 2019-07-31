(d => {
    // create a document fragment
    let fragment = d.createDocumentFragment();

    // run a loop 100 times
    for (let i = 0; i < 100; i += 1) {
        // create a new paragraph each iteration
        let p = d.createElement("p");
        // set the text
        p.textContent = "Rhubarb";
        // append it to the fragment
        fragment.append(p);
    }

    // append the fragment to the document
    d.getElementById("rhubarbs").append(fragment);
})(document);
