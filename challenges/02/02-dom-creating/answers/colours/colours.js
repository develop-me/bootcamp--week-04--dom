(d => {
    // get the colour boxes
    let items = Array.from(d.getElementById("items").children);

    // create a document fragment
    let fragment = d.createDocumentFragment();

    // go over each colour box
    // map each element to its backgroundColor
    // then output the colour list
    items.map(el => el.style.backgroundColor).forEach(colour => {
        // create a list item for each colour
        let li = d.createElement("li");
        // set the text of the list item
        li.textContent = colour;
        // append the list item to the fragment
        fragment.append(li);
    });

    // get the #colours element to output the list
    let colours = d.getElementById("colours");
    // append the fragment to the document
    colours.append(fragment);
})(document);
