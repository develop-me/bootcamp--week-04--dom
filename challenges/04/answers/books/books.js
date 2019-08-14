(d => {
    // get the list of books
    let books = d.getElementById("list");
    // get the main element - to append to
    let main = books.parentElement;

    // create the display element
    let display = d.createElement("p");
    // add the well class for styling
    // add the hidden class to hide it for now
    display.classList.add("well", "hidden");
    // append the display element to main
    main.append(display);

    // when the books list is clicked
    books.addEventListener("click", event => {
        // if it's not a list item give up
        if (event.target.tagName !== "LI") {
            return;
        }

        // if it is a list item
        let li = event.target;
        // remove the hidden class from display so it shows up
        display.classList.remove("hidden");
        // update the text of the display element
        display.textContent = `Author: ${li.dataset.author}, Price: £${(+li.dataset.price).toFixed(2)}`;
    });
})(document);
