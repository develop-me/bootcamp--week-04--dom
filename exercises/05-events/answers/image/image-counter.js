(d => {
    // get the image element
    let image = d.getElementById("image");

    // get the reset button
    let reset = d.getElementById("reset");

    // keep track of the current height and width
    let height = image.clientHeight;
    let width = image.clientWidth;

    // keep track of how many times the image has been clicked
    let counter = 1;

    let set = () => {
        // work out how many times to multiply by
        // doubling each time, so 2 to the power of counter
        let multiplier = Math.pow(2, counter);

        // update the image height/width
        image.style.height = `${height * multiplier}px`;
        image.style.width = `${width * multiplier}px`;
    };

    // when the image is clicked
    image.addEventListener("click", () => {
        // update the counter
        counter += 1;
        set();
    });

    // when the reset button is clicked
    reset.addEventListener("click", () => {
        // set the counter back to 1
        counter = 1;
        set();
    });
})(document);
