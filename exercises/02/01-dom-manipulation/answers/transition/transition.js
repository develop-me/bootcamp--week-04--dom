(d => {
    // a constant to keep track of how fast the transition should happen
    const speed = 5000; // for one loop in milliseconds

    // variables to keep track of the current hue
    // and how long has passed between loops
    let hue = 0;
    let last = 0;

    // the animation loop, runs as close to 60 times a second as possible
    // passes in how long since the animation first started
    let loop = time => {
        // we can work out how long has passed since the last loop
        // by subtracting the last time from the current time
        //
        let dt = time - last;
        // store the last time for the next loop
        last = time;

        // divide the time passed since the last frame by the speed we want
        // then times by 360 to get the right hue
        // hue takes a value between 0 and 360
        hue += dt / speed * 360;

        // set the hue
        d.body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;

        // setup the next frame of the animation
        requestAnimationFrame(loop);
    };

    loop(0);
})(document);
