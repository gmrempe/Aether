import Base from "./base";
import Weapon from "./weapon";
import CanvasState from "./canvasState";
import Player from "./player";

class Game {
    constructor(canvasEl, ctx) {
        this.ctx = ctx;
        this.canvas = canvasEl;
        this.player = new Player('#0095DD', this.ctx);
        this.canvasState = new CanvasState(this.canvas, this.player);
        this.base1 = new Base(500, 300, 30, '#0095DD', this.ctx);
        this.base2 = new Base(75, 75, 30, '#ff0000', this.ctx);
        this.base3 = new Base(280, 200, 30, '#ffffff', this.ctx);

        this.canvasState.addShape(this.base1);
        this.canvasState.addShape(this.base2);
        this.canvasState.addShape(this.base3);
    }





    drawGame() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.base1.draw(this.ctx);
        this.base2.draw(this.ctx);
        this.base3.draw(this.ctx);
        this.player.playerDraw(this.ctx);
        // requestAnimationFrame(draw);
    }

}

export default Game;