(d => {
    // get the #border element
    let border = d.getElementById("border");

    // this is our state
    // keep track of whether the border is blue or not
    let blue = true;

    // every time the user clicks
    border.addEventListener("click", () => {
        // if blue then set to red, otherwise set to blue
        border.style.borderColor = blue ? "#F00" : "#00F";

        // switch the value of blue
        blue = !blue;
    });
})(document);
