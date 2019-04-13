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
        this.aiPlayers = [];
        this.aiPlayerGenerator();
        this.gameOver = false;
        this.won = false;
    }
    
    addShapes() {
        for (let i = 0; i < this.bases.length; i++) {
            this.canvasState.addShape(this.bases[i]);
        }
    }
 
    aiPlayerGenerator() {
        if (this.playerCount === 2) {
            this.aiPlayers.push(this.aiRed = new AI('#ff0000', this.bases, 1, 3000));
        } else if (this.playerCount === 3) {
            this.aiPlayers.push(this.aiRed = new AI('#ff0000', this.bases, 1, 3000));
            this.aiPlayers.push(this.aiPurple = new AI("#ED0EE6", this.bases, 2, 3000));
        } else if (this.playerCount === 4) {
            this.aiPlayers.push(this.aiRed = new AI('#ff0000', this.bases, 1, 3000));
            this.aiPlayers.push(this.aiPurple = new AI("#ED0EE6", this.bases, 2, 1000));
            this.aiPlayers.push(this.aiYellow = new AI("#EDAA0E", this.bases, 3, 3000));
        }
    }

    baseGenerator() {
        let num = Math.floor(Math.random() * 10);
        if (num <= this.playerCount) {
            num = this.playerCount + 1;
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

    playerBases() {
        const playerBases = {};
        for (let i = 0; i < this.bases.length; i++) {
            if(this.bases[i].color !== "#ffffff") {
                playerBases[(this.bases[i].color)] = true;
            }
        }
        return playerBases;
    }

    isGameOver() {
        const playerBases = this.playerBases();
            if ((this.player.color in playerBases) && (Object.keys(playerBases).length > 1)) {
                return;
            }
            if (this.player.color in playerBases) {
                this.won = true;
            }

        this.gameOver = true;
    }
    
    drawEndGame() {
        this.ctx.font = "30px Arial"
        this.ctx.fillStyle = "#d6ffff"
        if (this.won === true) {
            this.ctx.fillText("You Win! Press Enter to play again", 50, 50)
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
        
        for (let i = 0; i < this.aiPlayers.length; i++) {
            this.aiPlayers[i].playerDraw(this.ctx);
        }

        this.isGameOver();
        if (this.gameOver === true) {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawEndGame();
        }
    }
    
}

export default Game;