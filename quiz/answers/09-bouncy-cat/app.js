(d => {
    const speed = 500;

    let img = d.getElementById("block");

    // width of the canvas minus the width of the image
    let width = d.getElementById("canvas").offsetWidth - img.offsetWidth;

    let x = 0; // keep track of x position
    let velocity = speed; // velocity keeps track of direction

    let last = 0; // keep track of last time

    let loop = time => {
        let dt = time - last;
        last = time;

        // add velocity to x
        // will go down if velocity is negative
        x += velocity * (dt / 1000);

        // if x goes over width or under 0 reverse direction
        if (x > width || x < 0) {
            velocity *= -1;
        }

        // update css
        img.style.transform = `translateX(${x}px`;

        // run the loop again
        requestAnimationFrame(loop);
    };

    loop(0);
})(document);
