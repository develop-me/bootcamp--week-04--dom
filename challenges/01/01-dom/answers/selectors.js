(d => {
    // don't need a variable for body
    // as its already easy to access using the document property
    d.body.classList.add("container");

    // select the header element by ID
    let header = d.getElementById("header");
    header.classList.add("col-md-12"); // add the class

    // select the sidebar element by ID
    let sidebar = d.getElementById("sidebar");
    sidebar.classList.add("col-md-4"); // add the class

    // select the main element by ID
    let main = d.getElementById("main");
    main.classList.add("col-md-8"); // add the class

    // select the first paragraph of main
    // querySelector always returns the first item
    // so no pseudo-selectors needed
    let firstPara = d.querySelector("#main p");
    firstPara.classList.add("lead"); // add the class

    // select the first list with a class
    let firstList = d.querySelector(".js__first-list");
    firstList.classList.add("list-group"); // add the new class

    // select the second list with a class
    let secondList = d.querySelector(".js__second-list");
    secondList.classList.add("pagination"); // add the new class
})(document);
