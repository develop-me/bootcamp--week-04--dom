(d => {
    // get the various elements we'll need
    let text = d.getElementById("input");
    let add = d.getElementById("store");
    let display = d.getElementById("display");
    let list = d.getElementById("list");

    // our state
    // we need to store whatever the user typed each time in an array
    // that way we can keep track of any number of things
    let store = [];

    // when add is clicked
    add.addEventListener("click", () => {
        // push the current value of the input into the array
        store.push(text.value);
        // set the input to be blank
        text.value = "";
        // focus the input
        text.focus();
    });

    // when the display button is clicked
    display.addEventListener("click", () => {
        // create a fragment
        let fragment = d.createDocumentFragment();
        // empty the list HTML
        list.textContent = "";

        // for each stored string
        store.sort().forEach(string => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = string;
            // set its class
            li.classList.add("list-group-item");
            // append it to the fragment
            fragment.append(li);
        });

        // append the fragment to the list
        list.append(fragment);
    });
})(document);
