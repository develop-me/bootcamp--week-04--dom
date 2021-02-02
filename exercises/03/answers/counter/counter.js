(d => {
    // get the output element
    let counter = d.getElementById("counter");

    // get the button element
    let button = d.getElementById("button");

    // this is our state
    // keep track of how many times the button has been clicked
    let count = 0;

    // every time the button is clicked
    button.addEventListener("click", () => {
        // increment the counter
        count += 1;

        // update the text of the counter element
        counter.textContent = count;
    });
})(document);
