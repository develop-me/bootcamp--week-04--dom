(d => {
    // get the #border element
    let border = d.getElementById("border");

    // this is our state
    // keep track of whether the border is black or not
    let black = true;

    // every time the user clicks
    border.addEventListener("click", () => {
        // if the border is black
        if (black) {
            // set it to red
            border.style.borderColor = "#F00";
            // update the boolean to keep track of the change
            black = false;
        } else {
            // set it to black
            border.style.borderColor = "#000";
            // update the boolean to keep track of the change
            black = true;
        }
    });
})(document);
