(d => {
    // get the form element
    let form = d.getElementById("form");

    // get all the fields
    let fields = Array.from(form.querySelectorAll(".form-control"));

    // when the form is submitted
    form.addEventListener("submit", event => {
        // find any invalid fields
        let invalid = fields.filter(el => el.value === "");

        // remove any error code for all elements
        // will add back later if there are any
        fields.forEach(el => {
            el.parentElement.classList.remove("has-error");

            if (el.nextElementSibling) {
                el.nextElementSibling.remove();
            }
        });

        // if there are any invalid fields
        if (invalid.length) {
            // prevent default - form shouldn't submit
            event.preventDefault();

            // go over each invalid element and add error stuff
            invalid.forEach(el => {
                // add error class
                el.parentElement.classList.add("has-error");
                // create error message paragraph
                let p = d.createElement("p");
                // set the error message text
                p.textContent = "Field Required";
                // add the error message class
                p.classList.add("help-block");
                // append the error message
                el.parentElement.append(p);
            });
        }
    });
})(document);
