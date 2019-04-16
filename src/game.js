import Base from "./base";
import CanvasState from "./canvasState";
import Player from "./player";
import AI from "./ai";

class Game {
    constructor(canvasEl, ctx, playerCount) {
        this.ctx = ctx;
        this.canvas = canvasEl;
        this.playerCount = playerCount;
        this.player = new Player('#327f95');
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
            this.aiPlayers.push(this.aiRed = new AI('#c60707', this.bases, 1, 3000));
        } else if (this.playerCount === 3) {
            this.aiPlayers.push(this.aiRed = new AI('#c60707', this.bases, 1, 3000));
            this.aiPlayers.push(this.aiPurple = new AI("#249310", this.bases, 2, 3000));
        } else if (this.playerCount === 4) {
            this.aiPlayers.push(this.aiRed = new AI('#c60707', this.bases, 1, 3000));
            this.aiPlayers.push(this.aiPurple = new AI("#249310", this.bases, 2, 3000));
            this.aiPlayers.push(this.aiYellow = new AI("#830f92", this.bases, 3, 3000));
        }
    }

    baseGenerator() {
        let num = Math.floor(Math.random() * 7);
        if (num <= this.playerCount) {
            num = this.playerCount + 1;
        }
        for(let i = 0; i < num; i++) {
            this.bases.push(new Base(this.basePos(), 25, this.colorPicker()))
        }
    }
    
    basePos() {
        let x = 30 + (Math.random() * 630);
        let y = 30 + (Math.random() * 320);

        for(let i = 0; i < this.bases.length; i++) {
            while(Math.abs(this.bases[i].posX - x) <= 35) {
                x = 30 + (Math.random() * 630);
            }
        }
        
        for(let i = 0; i < this.bases.length; i++) {
            while(Math.abs(this.bases[i].posY - y) <= 35) {
                y =  30 + (Math.random() * 320);
            }
        }
        return {y: y, x: x};
    }

    colorPicker() {
      if (this.bases.length < 1) {
          return '#327f95';
      } else if (this.bases.length < 2) {
          return '#c60707';
      } else if (this.bases.length < 3 && this.playerCount > 2) {
          return "#249310";
      } else if (this.bases.length < 4 && this.playerCount > 3) {
          return "#830f92";
      } else {
          return '#d6d9ca';
      }
    }

    playerBases() {
        const playerBases = {};
        for (let i = 0; i < this.bases.length; i++) {
            if (this.bases[i].color !== "#d6d9ca") {
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
        this.ctx.fillStyle = "#d6d9ca"
        
        if (this.won === true) {
            this.ctx.fillText("You Won!", 280, 50)
        } else {
            this.ctx.fillText("GAME OVER", 260, 50)
        }
        clearInterval();

        function hide(e) {
            e.target.style.display = 'none';
            e.currentTarget.parentElement.firstElementChild.style.display = 'none';
            e.currentTarget.parentElement.style.zIndex = '-1';
        };

        const ele = document.getElementById("restart");
        ele.style.display = 'block';
        ele.parentElement.style.zIndex = '2';
        ele.childNodes[1].addEventListener('click', function (ele) {
            hide(ele);
            location.reload();
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