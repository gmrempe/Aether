import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const playerCount = 2;
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