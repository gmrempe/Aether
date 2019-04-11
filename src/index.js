import Base from "./base";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");

    const ctx = canvasEl.getContext("2d");

    // const bases = [];    //put bases into array and then iterate through to draw
    // bases = () => {
    //    bases.push((new Base(40, 40, '#0095DD')))
    // }
    const base1 = new Base(500, 300, '#0095DD', ctx);
    const base2 = new Base(75, 75, '#ff0000', ctx);
    const base3 = new Base(280, 200, '#ffffff', ctx);

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        base1.draw(ctx);
        base2.draw(ctx);
        base3.draw(ctx);
        requestAnimationFrame(draw);
    }

    setInterval( () => {
        draw(ctx);
    }, 100)    
});