(d => {
    let links = d.getElementById("links");
    let output = d.getElementById("output");

    links.addEventListener("click", e => {
        e.preventDefault();

        let clicked = e.target;

        if (clicked.tagName === "A") {
            let name = clicked.textContent;
            output.textContent = name;
        }
    });
})(document);
