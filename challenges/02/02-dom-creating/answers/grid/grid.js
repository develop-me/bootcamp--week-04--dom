(d => {
    // the number of columns (and rows in this case)
    const cols = 64;

    // how much to go up by for each rgb value
    // there are 256 possible values, so divide by number of columns
    const increment = 256 / cols;

    // the size of the boxes to create
    const size = 10;

    // create a document fragment
    let fragment = d.createDocumentFragment();

    // loop from 1 to 64 for columns
    for (let i = 0; i < cols; i += 1) {
        // loop from 1 to 64 for rows
        for (let j = 0; j < cols; j += 1) {
            // create a div
            let div = d.createElement("div");

            // set the background colour based on the current indexes
            div.style.backgroundColor = `rgb(${i * increment},${j * increment},127)`;

            // set the left/top properties based on the current index
            div.style.transform = `translate(${i * size}px, ${j * size}px)`;

            // append the fragment
            fragment.append(div);
        }
    }

    // select the grid element
    let grid = d.getElementById("grid");
    // append the document fragment
    grid.append(fragment);
})(document);
