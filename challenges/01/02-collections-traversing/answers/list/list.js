(d => {
    // select the element with id main and get its children
    // convert into an array for efficient forEach looping
    let items = Array.from(d.getElementById("list").children);

    // go over each paragraph
    // forEach passes in each paragrah element and the current index
    items.forEach(li => {
        // add the class to each one
        li.classList.add("list-group-item");
    });
})(document);
