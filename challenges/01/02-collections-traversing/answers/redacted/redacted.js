(d => {
    // select the element with id main and get its children
    // convert into an array for efficient forEach looping
    let paragraphs = Array.from(d.getElementById("main").children);

    // go over each paragraph
    // forEach passes in each paragrah element and the current index
    paragraphs.forEach((p, i) => {
        // get the paragraph text content
        // search it for the phrase
        // if it doesn't return -1 it's found it
        if (p.textContent.search("secret moon base") !== -1) {
            // if it finds it add the redacted class
            p.classList.add("redacted");
        }
    });
})(document);
