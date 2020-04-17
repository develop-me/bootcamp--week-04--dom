(d => {
    // get the image element
    let image = d.getElementById("image");

    // get the reset button
    let reset = d.getElementById("reset");

    // keep track of the current height and width
    let height = image.clientHeight;
    let width = image.clientWidth;

    // keep track of the original height and width
    let originalHeight = height;
    let originalWidth = width;

    // when the image is clicked
    image.addEventListener("click", () => {
        // multiply the height/width by 2
        height *= 2;
        width *= 2;

        // update the image height/width
        image.style.height = `${height}px`;
        image.style.width = `${width}px`;
    });

    // when the reset button is clicked
    reset.addEventListener("click", () => {
        // reset height/width
        height = originalHeight;
        width = originalWidth;

        // set the image height/width to the original values
        image.style.height = `${height}px`;
        image.style.width = `${width}px`;
    });
})(document);
