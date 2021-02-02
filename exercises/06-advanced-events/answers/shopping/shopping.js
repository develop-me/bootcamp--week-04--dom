(d => {
    // the elements we'll need
    let main = d.getElementById("items");
    let tbody = d.getElementById("shopping-list").querySelector("tbody");
    let total = d.getElementById("total");

    // a basket to keep track of the items added
    let basket = {};

    // add the item to the basket
    let add = item => {
        let name = item.dataset.name;
        let price = item.dataset.price;

        // if it's not in the basket it alread add it
        if (!basket[name]) {
            basket[name] = {
                price: price,
                quantity: 1,
            };
        // if it is increment the quantity by 1
        } else {
            basket[name].quantity += 1;
        }
    };

    // renders the basket
    let render = () => {
        let fragment = d.createDocumentFragment();
        // keep track of total cost
        let totalCost = 0;
        // empty the table
        tbody.textContent = "";

        // for each item in the basket
        Object.keys(basket).forEach(key => {
            // create a new row
            let tr = d.createElement("tr");

            // create the product name column
            let name = d.createElement("td");
            name.textContent = key;
            tr.append(name);

            // create the quantity column
            let quantity = d.createElement("td");
            quantity.textContent = basket[key].quantity;
            tr.append(quantity);

            // create the price column
            let price = d.createElement("td");
            price.textContent = `£${(+basket[key].price).toFixed(2)}`;
            tr.append(price);

            // update the total cost
            totalCost += basket[key].quantity * basket[key].price;

            fragment.append(tr);
        });

        // add items to the table body
        tbody.append(fragment);
        // add total text
        total.textContent = `£${totalCost.toFixed(2)}`;
    };

    // when an item is clicked
    main.addEventListener("click", event => {
        // only if it's a js__add item
        if (!event.target.classList.contains("js__add")) {
            return;
        }

        // update the basket object
        add(event.target);
        // re-render the basket
        render();
    });
})(document);
