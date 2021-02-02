(d => {
    // get the div to move around
    let follow = d.getElementById("follow");

    // need to take the div's initial position into account
    let offset = follow.getBoundingClientRect();

    let move = e => {
        // e.clientX/Y gives us the mouse position
        // minus the relevant offset
        // minus 50 - follow is 100 pixels across, so this keeps it centered
        let left = (e.clientX - offset.x - 50);
        let top = (e.clientY - offset.y - 50);
        follow.style.transform = `translate(${left}px, ${top}px)`;
    };

    // call the move function when the mouse moves
    window.addEventListener("mousemove", move);
})(document);
