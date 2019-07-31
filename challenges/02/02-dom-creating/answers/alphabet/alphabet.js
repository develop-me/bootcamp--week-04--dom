(d => {
    // create a ul element
    let ul = d.createElement("ul");

    // the letter A has the character code 65 in ASCII
    // there are 26 letters in the alphabet
    // so go from 65 until 65 + 26
    for (let i = 65; i < (65 + 26); i +=1) {
        // create a new list item for each letter
        let li = d.createElement("li");
        // set the text content by getting the letter using the character code
        li.textContent = String.fromCharCode(i);

        // append to the list
        // don't need a document fragment as the list isn't in document yet
        ul.append(li);
    }

    // once you've populated the list
    // append to the #alphabet element
    d.getElementById("alphabet").append(ul);
})(document);
