(d => {
    // constants to track the number of columns and the size of each box
    const cols = 5;
    const size = 50;

    // get the items as children of the #items element
    let items = Array.from(d.getElementById("items").children);

    // for each item
    // need the index for positioning
    items.forEach((el, i) => {
        // the top property by using division to work out row
        let top = Math.floor(i / cols) * size;

        // the the left property by using modulus to work out column
        let left = (i % cols) * size;

        el.style.transform = `translate(${left}px, ${top}px)`;
    });
})(document);
