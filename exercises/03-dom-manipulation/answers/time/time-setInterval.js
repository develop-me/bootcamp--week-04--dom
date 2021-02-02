(d => {
    // get the #time element
    let time = d.getElementById("time");

    // put the code to update the time in a named function
    let update = () => {
        // set the element's text to the time using toLocaleTimeString
        time.textContent = new Date().toLocaleTimeString();
    };

    // tell browser to call the update function once a second
    setInterval(update, 1000);

    // call the update function when the page loads
    update();
})(document);
