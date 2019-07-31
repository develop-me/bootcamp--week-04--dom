(d => {
    // get a reference to the table by ID
    let table = d.getElementById("table");

    // find the table row elements and convert to an array
    // can't use table.children as the browser will add a <tbody> element
    // could use table.firstElementChild.children as an alternative
    let rows = Array.from(table.getElementsByTagName("tr"));

    // loop over each row
    // need the index to work out what number we're on
    rows.forEach((row, i) => {
        // if we're on an even row - so every other one
        if (i % 2 === 0) {
            // add the alternate class
            row.classList.add("alternate");
        }
    });
})(document);
