(d => {
    // get the elements
    let main = d.getElementById("main");
    let remove = d.getElementById("remove");

    // keep track of the removed elements
    let store = [];

    // when the main element is clicked
    main.addEventListener("click", event => {
        // don't do anything if it's not a paragraph
        if (event.target.tagName !== "P") {
            return;
        }

        // add element to store
        store.push(event.target);

        // add the selected class
        event.target.classList.add("selected");
    });

    // when remove is clicked
    remove.addEventListener("click", () => {
        // remove all the stored elements
        store.forEach(el => el.remove());

        // clear the store
        store = [];
    });
})(document);
