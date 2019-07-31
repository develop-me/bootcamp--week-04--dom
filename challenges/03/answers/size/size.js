(d => {
    // get the width and height spans
    let w = d.getElementById("width");
    let h = d.getElementById("height");

    // create a named function to run on resize
    let update = () => {
        // set the text to the window size
        w.textContent = window.innerWidth;
        h.textContent = window.innerHeight;
    };

    // when the window resizes call update
    window.addEventListener("resize", update);

    // call update when the page loads
    update();
})(document);
