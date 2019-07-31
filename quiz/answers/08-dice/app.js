(d => {
    let random = () => Math.floor(Math.random() * 6) + 1;

    let button = d.getElementById("roll");

    let firstEl = d.getElementById("first");
    let secondEl = d.getElementById("second");

    let firstPrev = 1;
    let secondPrev = 1;

    button.addEventListener("click", () => {
        let first = random();
        let second = random();

        firstEl.classList.remove(`dice-${firstPrev}`);
        firstEl.classList.add(`dice-${first}`);

        secondEl.classList.remove(`dice-${secondPrev}`);
        secondEl.classList.add(`dice-${second}`);

        firstPrev = first;
        secondPrev = second;
    });
})(document);
