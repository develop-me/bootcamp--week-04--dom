(d => {
    // don't need a variable as it's easy to get document.body directly
    d.body.classList.add("container");

    // can get away without a variable for header as we only use it once
    d.getElementById("header").classList.add("col-md-12");
    // can get away without a variable for sidebar as we only use it once
    d.getElementById("sidebar").classList.add("col-md-4");

    // we use main for a few things, so store in a variable
    let main = d.getElementById("main");
    main.classList.add("col-md-8"); // add class

    // get firstElementChild of main and add the class
    main.firstElementChild.classList.add("lead");

    // getElementsByClassName returns an array like object
    // we want the first one (index 0), so we can use array notation to get it
    // we don't need to convert it to an array as we're not looping over it
    let firstList = d.getElementsByClassName("js__first-list")[0];
    firstList.classList.add("list-group"); // add class

    // get the children of the first list and turn into array
    // loop over each item and add the class to each one
    Array.from(firstList.children)
         .forEach(el => el.classList.add("list-group-item"));

    // again, we can use array syntax with getElementsByClassName
    // don't need to store in a variable as we don't do anything else with it
    d.getElementsByClassName("js__second-list")[0].classList.add("pagination");
})(document);
