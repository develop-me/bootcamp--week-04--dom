(d => {
    // get the #time element
    let time = d.getElementById("time");

    // set the element's text to the time using toLocaleTimeString
    time.textContent = new Date().toLocaleTimeString();
})(document);
