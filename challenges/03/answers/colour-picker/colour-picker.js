(d => {
    // get the colour element
    let picker = d.getElementById("picker");

    // get the sliders
    let red = d.getElementById("red");
    let green = d.getElementById("green");
    let blue = d.getElementById("blue");

    // create a named function that updates
    // the background colour of the colour element
    let change = () => {
        // set the picker background colour using rgb
        picker.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    };

    // when any of the sliders change, run the change function
    red.addEventListener("input", change);
    green.addEventListener("input", change);
    blue.addEventListener("input", change);

    // run the change function when the page first loads
    change();
})(document);
