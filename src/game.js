import Base from "./base";
import Weapon from "./weapon";
import CanvasState from "./canvasState";
import Player from "./player";

class Game {
    constructor(canvasEl, ctx, playerCount) {
        this.ctx = ctx;
        this.canvas = canvasEl;
        this.playerCount = playerCount;
        this.player = new Player('#0095DD', this.ctx);
        this.canvasState = new CanvasState(this.canvas, this.player);
        this.bases = [];
        // this.base1 = new Base(500, 300, 30, '#0095DD', this.ctx);
        // this.base2 = new Base(75, 75, 30, '#ff0000', this.ctx);
        // this.base3 = new Base(280, 200, 30, '#ffffff', this.ctx);
        this.baseGenerator();
        this.addShapes();
        // this.canvasState.addShape(this.base1);
        // this.canvasState.addShape(this.base2);
        // this.canvasState.addShape(this.base3);
    }
    
    addShapes() {
        for (let i = 0; i < this.bases.length; i++) {
            this.canvasState.addShape(this.bases[i]);
        }
    }

    baseGenerator() {
        let num = Math.floor(Math.random() * 10);
        if (num < 3) {
            num = 3
        }
        for(let i = 0; i < num; i++) {
            this.bases.push(new Base(this.basePosX(), this.basePosY(), 30, this.colorPicker()))
        }
    }
    
    basePosX() {
        let x = Math.random() * 650;
        if(x <= 30) {
            x = 30;
        }
        for(let i = 0; i < this.bases.length; i++) {
            while(Math.abs(this.bases[i].posX - x) <= 50) {
                x = Math.random() * 650;
            }
        }
        return x;
    }
    
    basePosY() {
        let y = Math.random() * 350
        if (y <= 30) {
            y = 30;
        }
        for(let i = 0; i < this.bases,length; i++) {
            while(Math.abs(this.bases[i].posY - y) <= 50) {
                y = Math.random() * 350;
            }
        }
        return y;
    }

    colorPicker() {
      if(this.bases.length < 1) {
          return '#0095DD';
      } else if(this.bases.length < 2) {
          return '#ff0000';
      } else {
          return '#ffffff';
      }
    }

    drawGame() {
        for (let i = 0; i < this.bases.length; i++) {
            this.bases[i].draw(this.ctx);
        }
        // this.base1.draw(this.ctx);
        // this.base2.draw(this.ctx);
        // this.base3.draw(this.ctx);
        this.player.playerDraw(this.ctx);
    }

}

export default Game;