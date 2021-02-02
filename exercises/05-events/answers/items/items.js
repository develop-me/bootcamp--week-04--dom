(d => {
    // the width of the items
    const itemWidth = 200;

    // get the #items element
    let main = d.getElementById("items");

    // get the item elements
    let items = Array.from(d.getElementById("items").children);

    // create a named resize function
    let resize = () => {
        // get the width of the main element
        let width = main.clientWidth;

        // works out the number of columns
        // the current full width divided by the width of an item
        let cols = Math.floor(width / itemWidth);

        // for each item
        items.forEach((el, i) => {
            // top and left using the standard tricks
            let top = Math.floor(i / cols) * itemWidth;
            let left = (i % cols) * itemWidth;
            el.style.transform = `translate(${left}px, ${top}px)`;
        });
    };

    // call resize when the brower resizes
    window.addEventListener("resize", resize);

    // call resize when the page loads
    // sets them up intially
    resize();
})(document);
