(d => {
    // a list of the functions
    // key is the symbol to use
    // value is the function to run
    let fns = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "÷": (a, b) => a / b,
        "×": (a, b) => a * b,
    };

    // get the various elements
    let functions = d.getElementById("functions");
    let input1 = d.getElementById("value1");
    let input2 = d.getElementById("value2");
    let answer = d.getElementById("answer");

    // go over the functions and create a button for each one
    Object.keys(fns).forEach(key => {
        // create a new button
        let button = d.createElement("button");
        // add the classes for styling
        button.classList.add("btn", "btn-primary");
        // set the button text to the key
        button.textContent = key;
        // add the button to the document
        functions.append(button);
    })

    // when a function is clicked
    functions.addEventListener("click", e => {
        // get the target
        let button = e.target;

        // make sure it`s a button
        if (button.tagName === "BUTTON") {
            // work out which function to use based on the button text
            let fn = button.textContent;
            // get the function from the functions object
            // and pass the two values
            // converting them to numbers as we do
            let result = fns[fn](+input1.value, +input2.value);
            // output the result
            answer.textContent = result;
        }
    });
})(document);
