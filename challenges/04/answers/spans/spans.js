(d => {
    // get the main
    let main = d.getElementById("s");

    // keep track of which pixels are highlighted
    let highlighted = [];

    // when anything is clicked
    main.addEventListener("click", event => {
        let clicked = event.target;

        // if it's a span
        if (clicked.matches("span")) {
            // see if it's in the array of highlighted spans
            let index = highlighted.indexOf(clicked);

            // if it's not in the highlighted array make it highlighted
            if (index === -1) {
                clicked.style.backgroundColor = "#090";
                // push into the highlighted array to track it
                highlighted.push(clicked);
            } else {
                // clear the background colour
                clicked.style.backgroundColor = "";
                // remove it from the highlighted array
                highlighted.splice(index, 1);
            }
        }
    });
})(document);
