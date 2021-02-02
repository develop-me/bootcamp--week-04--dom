(d => {
    // get the two inputs
    let value1 = d.getElementById("value1");
    let value2 = d.getElementById("value2");

    // get the four buttons
    let add = d.getElementById("add");
    let subtract = d.getElementById("subtract");
    let multiply = d.getElementById("multiply");
    let divide = d.getElementById("divide");

    // get the answer element
    let answer = d.getElementById("answer");

    // when add is clicked
    add.addEventListener("click", () => {
        // get the values and add them together and set as answer text
        // use + to cast them to numbers, otherwise they'll concatenate
        answer.textContent = +value1.value + +value2.value;
    });

    // when subtract is clicked
    subtract.addEventListener("click", () => {
        // subtract the values and set as answer text
        // don't need to cast to numbers as - isn't overloaded
        answer.textContent = value1.value - value2.value;
    });

    // when multiply is clicked
    multiply.addEventListener("click", () => {
        // multiply the values and set as answer text
        answer.textContent = value1.value * value2.value;
    });

    // when divide is clicked
    divide.addEventListener("click", () => {
        // divide the values and set as answer text
        answer.textContent = value1.value / value2.value;
    });
})(document);
