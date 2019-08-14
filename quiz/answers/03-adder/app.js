(d => {
    let total = 0;
    let input = d.getElementById("input");
    let button = d.getElementById("button");
    let output = d.getElementById("total");

    button.addEventListener("click", () => {
        let val = +input.value;
        total += val;
        output.textContent = total;
    });
})(document);
