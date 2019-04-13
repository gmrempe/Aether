import Base from "./base";
import CanvasState from "./canvasState";
import Player from "./player";
import AI from "./ai";

class Game {
    constructor(canvasEl, ctx, playerCount) {
        this.ctx = ctx;
        this.canvas = canvasEl;
        this.playerCount = playerCount;
        this.player = new Player('#0095DD');
        this.canvasState = new CanvasState(this.canvas, this.player);
        this.bases = [];
        this.baseGenerator();
        this.addShapes();
        this.ai = new AI('#ff0000', this.bases)
        this.gameOver = false;
        this.won = false;
    }
    
    addShapes() {
        for (let i = 0; i < this.bases.length; i++) {
            this.canvasState.addShape(this.bases[i]);
        }
    }

    baseGenerator() {
        let num = Math.floor(Math.random() * 10);
        if (num < 2) {
            num = 2;
        }
        for(let i = 0; i < num; i++) {
            this.bases.push(new Base(this.basePos().x, this.basePos().y, 30, this.colorPicker()))
        }
    }
    
    basePos() {
        let x = Math.random() * 650;

        for(let i = 0; i < this.bases.length; i++) {
            while((Math.abs(this.bases[i].posX - x) <= 50) || (x <= 30)) {
                x = Math.random() * 650;
            }
        }

        let y = Math.random() * 350

        for(let i = 0; i < this.bases,length; i++) {
            while((Math.abs(this.bases[i].posY - y) <= 50) || (Math.abs(this.bases[i].posX - x) <=50) || (y <= 30)) {
                y = Math.random() * 350;
            }
        }
        return {y: y, x: x};
    }

    colorPicker() {
      if (this.bases.length < 1) {
          return '#0095DD';
      } else if (this.bases.length < 2) {
          return '#ff0000';
      } else if (this.bases.length < 3 && this.playerCount > 2) {
          return "#ED0EE6";
      } else if (this.bases.length < 4 && this.playerCount > 3) {
          return "#EDAA0E";
      } else {
          return '#ffffff';
      }
    }

    isGameOver() {
        for(let i = 0; i<this.bases.length; i++) {
            if ((this.bases[i].color != this.player.color) && (this.bases[i].color != "#ffffff")) {
                return;
            } else if (this.bases[i].color === "#ffffff") {
                continue;
            } else if (this.bases[i].color === this.player.color) {
                this.won = true;
            }
        }

        this.gameOver = true;
    }
    
    drawEndGame() {
        this.ctx.font = "30px Arial"
        this.ctx.fillStyle = "#d6ffff"
        if (this.won === true) {
            this.ctx.fillText("You Win! Press Enter to retry", 50, 50)
        } else {
            this.ctx.fillText("GAMEOVER Press Enter to retry", 50, 50)
        }
        clearInterval();

        document.addEventListener('keydown', function (event) {
            const key_press = String.fromCharCode(event.keyCode);
            if (event.keyCode == 13) { location.reload(); }
        });
    }
    
    drawGame() {
        for (let i = 0; i < this.bases.length; i++) {
            this.bases[i].draw(this.ctx);
        }

        this.player.playerDraw(this.ctx);
        this.ai.playerDraw(this.ctx);

        this.isGameOver();
        if (this.gameOver === true) {
            this.drawEndGame();
        }
    }
    
}

export default Game;