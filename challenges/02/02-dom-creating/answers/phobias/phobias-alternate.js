(d => {
    // the phobias
    let phobias = [
        "katastichophobia", // Fear and avoidance of lists
        "rhabdophobia", // Fear of magic wands
        "eisoptrophobia", // Fear of mirrors
        "papaphobia", // Fear of the pope
        "hypegiaphobia", // Fear of responsibility
        "odontophobia", // Fear of dentistry
        "ergophobia", // Fear of work
        "pteronophobia", // Fear of feathers
        "taphephobia", // Fear of being buried alive
        "apiphobia", // Fear of bees
    ].sort();

    // create an object literal that has the structure
    // {
    //     "A": [phobias beginning with "a"],
    //     ...
    // }
    // then reduce into an object literal
    let data = phobias.reduce((acc, phobia) => {
        // get first character of current phobia
        let first = phobia.charAt(0);

        // if a key for the current first letter doesn't exist
        if (!acc[first]) {
            // create the key and set its value to an empty array
            acc[first] = [];
        }

        // push the current phobia into the array for its first letter
        acc[first].push(phobia);

        return acc;
    }, {});

    // now onto the layout code
    // create an empty list element
    let list = d.createElement("ul");

    // go over each key in the object literal
    // passes in each first letter
    Object.keys(data).forEach(letter => {
        // create a new list item for current letter
        let li = d.createElement("li");
        // set the text to an uppercased version of the letter
        li.textContent = letter.toUpperCase();

        // create the list for the phobias for this letter
        let ul = d.createElement("ul");

        // for each phobia
        data[letter].forEach(phobia => {
            // create a list item for each phobia
            let li = d.createElement("li");
            // set the text to the phobia
            li.textContent = phobia;
            // append to the phobias list
            ul.append(li);
        })

        // append the phobias list to the letter's list
        li.append(ul);

        // append the li to the fragment
        list.append(li);
    });

    d.getElementById("phobias").append(list);
})(document);
