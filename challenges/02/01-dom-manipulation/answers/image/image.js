(d => {
    // get the image using an ID
    let image = d.getElementById("image");

    // get the height and width and store them in variables
    let h = image.clientHeight;
    let w = image.clientWidth;

    // set the height and width style properties to double what they were
    // make sure to add "px" on the end
    image.style.height = `${h * 2}px`;
    image.style.width = `${w * 2}px`;
})(document);
