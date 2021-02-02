(d => {
    // get the #canvas element
    let canvas = d.getElementById("canvas");

    // get the canvas' context
    let ctx = canvas.getContext("2d");

    // loop from 0 to 255 for the rows
    for (let i = 0; i < 256; i += 1) {
        // loop from 0 to 255 for the columns
        for (let j = 0; j < 256; j += 1) {
            // set the colour to
            ctx.fillStyle = `rgb(${i},${j},127)`;

            // draw the rectangle at coordinates (i, j)
            // make it 1x1 in size
            ctx.fillRect(i, j, 1, 1);
        }
    }
})(document);
