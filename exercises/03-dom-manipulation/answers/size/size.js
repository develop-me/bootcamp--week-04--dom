(d => {
    // get the #width and #height elements
    let w = d.getElementById("width");
    let h = d.getElementById("height");

    // set the width element's text to the window width
    w.textContent = window.innerWidth;

    // set the height element's text to the window height
    h.textContent = window.innerHeight;
})(document);
