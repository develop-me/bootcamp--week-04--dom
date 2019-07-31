(d => {
    // keep the number of columns in a constant
    const columns = 4;

    // select the items container then get its children
    // turn into an array for efficient forEach
    let items = Array.from(d.getElementById("items").children);

    // go over each item in turn
    // forEach passes in each element and the current index
    items.forEach((el, i) => {
        // use modulus to work out the current column
        let col = (i % columns) + 1;
        // use division and rounding to work out the current row
        let row = Math.floor(i / columns) + 1
        // set both classes
        el.classList.add(`col-${col}`, `row-${row}`);
    });
})(document);
