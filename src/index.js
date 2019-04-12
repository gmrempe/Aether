import Base from "./base";
import Weapon from "./weapon";
import CanvasState from "./canvasState";
import Player from "./player";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");

    // document.addEventListener("onmousedown", () => {
    //     if (e.target.color === player.color) {

    //     }
    // })

    // document.addEventListener("onmouseup", () => {

    // })

    // const bases = [];    //put bases into array and then iterate through to draw
    // bases = () => {
    //    bases.push((new Base(40, 40, '#0095DD')))
    // }
    const player = new Player('#0095DD', ctx);
    const canvasState = new CanvasState(canvasEl, player);
    const base1 = new Base(500, 300, 30, '#0095DD', ctx);
    const base2 = new Base(75, 75, 30, '#ff0000', ctx);
    const base3 = new Base(280, 200, 30, '#ffffff', ctx);
    canvasState.addShape(base1);
    canvasState.addShape(base2);
    canvasState.addShape(base3);



    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        base1.draw(ctx);
        base2.draw(ctx);
        base3.draw(ctx);
        // debugger
        player.playerDraw(ctx);
        requestAnimationFrame(draw);
    }

    requestAnimationFrame( () => {
        draw(ctx);
    })    
});