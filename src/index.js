import Base from "./base";
import Weapon from "./weapon";
import CanvasState from "./canvasState";
import Player from "./player";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const playerCount = 2;
    // const bases = [];    //put bases into array and then iterate through to draw
    // bases = () => {
    //    bases.push((new Base(40, 40, '#0095DD')))
    // }
    const game = new Game(canvasEl, ctx, playerCount)

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.drawGame();
        requestAnimationFrame(draw);
    }

    requestAnimationFrame( () => {
        draw(ctx);
    })    
});