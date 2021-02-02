(d => {
    // get the elements
    let todo = d.getElementById("todo");
    let add = d.getElementById("add");
    let list = d.getElementById("list");

    // when the add button is clicked
    add.addEventListener("click", () => {
        // create a new list item
        let li = d.createElement("li");
        // set the text to the input's value
        li.textContent = todo.value;
        // add the class for styling
        li.classList.add("list-group-item");
        // clear the input
        todo.value = "";
        // focus the input
        todo.focus();
        // add the list item as the first item in the list
        list.prepend(li);
    });
})(document);
