(d => {
    let div = d.getElementById("colour");

    let colours = [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967",
    ];

    let current = 0;

    let update = () => {
        let colour = colours[current];
        div.style.background = colour;

        // use modulus to loop the index
        current = (current + 1) % colours.length;
    };

    div.addEventListener("click", update);
    update();
})(document);
