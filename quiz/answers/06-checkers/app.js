(d => {
    let blocks = Array.from(d.getElementsByClassName("block"));

    // work out the row from the index
    let row = i => Math.floor(i / 8);

    blocks.filter((_, i) => (row(i) + i) % 2 === 0).forEach(block => {
        block.style.background = "#000";
    });

    // Answer by Riku from Cohort #7
})(document);
