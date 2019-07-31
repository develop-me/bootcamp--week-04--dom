(d => {
    let list = d.getElementById("list");

    list.addEventListener("click", e => {
        let item = e.target;

        if (item.tagName === "LI") {
            list.prepend(item);
        }
    });
})(document);
