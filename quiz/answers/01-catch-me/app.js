(d => {
    let top = 0;
    let button = d.getElementById("button");

    button.addEventListener("click", () => {
        top += 50;
        button.style.transform = `translateY(${top}px)`;
    });
})(document);
