(d => {
    // get the main element
    let main = d.getElementById("main");

    // when it's clicked
    main.addEventListener("click", event => {
        // get the clicked item
        let clicked = event.target;

        // make sure its a button
        if (clicked.matches("button")) {
            // create a new button each time
            let b = d.createElement("button");
            // set the text of the button
            b.textContent = "Click Me!";
            // set the classes of the button
            b.classList.add("btn", "btn-primary");
            // append the button to main
            main.append(b);
        }
    });
})(document);
