import Game from "./game";
import Base from "./base";
import Player from "./player";
import CanvasState from "./canvasState";

document.addEventListener("DOMContentLoaded", () => {
    const settings = document.getElementById('settings');
    let canvasEl = document.getElementById("canvas");
    let ctx = canvasEl.getContext("2d");
    const menu = document.getElementById('ui-wrapper');
        
        function hide(ele) {
            ele.style.display = 'none';
            ele.style.zIndex = '-1';
        };
        
        function show(ele) {
            ele.style.display = 'block';
            ele.style.zIndex = "2";
        };
        
        document.querySelectorAll('.play')[0].addEventListener('click', function () {
            const playerCount = parseInt(document.querySelector('input[name="aiSelector"]:checked').value, 10) + 1;
            const delay = parseInt(document.querySelector('input[name="difficulty"]:checked').value, 10);
            const baseNumber = parseInt(document.querySelector('input[name="numCircles"]:checked').value, 10);
            hide(menu);
            startGame(playerCount, delay, baseNumber);
        });
        
        document.querySelectorAll('.settings')[0].addEventListener('click', function () {
            hide(menu);
            show(settings);
        });
        
        document.querySelectorAll('.instructions')[0].addEventListener('click', function () {
            hide(menu);
            requestAnimationFrame( () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const b1 = new Base({ x: 70, y: 100 }, 25, "#327f95");
                const b2 = new Base({ x: 250, y: 205 }, 25, "#327f95");
                const b3 = new Base({ x: 450, y: 205 }, 25, "green");
                const b4 = new Base({ x: 70, y: 290 }, 25, "#d6d9ca");
                const playerDemo = new Player('#327f95');
                const canvasState = new CanvasState(canvas, playerDemo);
                canvasState.addShape(b2);
                canvasState.addShape(b3);
                b1.draw(ctx);
                b4.draw(ctx);
                
                let req = {};

                function demo() {
                    ctx.clearRect(200, 200, 350, 40);
                    b2.draw(ctx);
                    b3.draw(ctx);
                    playerDemo.playerDraw(ctx);
                    req = requestAnimationFrame(demo);
                }

                requestAnimationFrame(() => {
                    demo();
                });

                ctx.font = '20px Arial';
                ctx.fillStyle = "#327f95";
                ctx.fillText("Menu", 10, 17)
                
                function menuClick(e) {
                    const mouse = canvasState.getMouse(e);
                    if (mouse.x < 80 && mouse.x > 0 && mouse.y < 30 && mouse.y > 0) {
                        cancelAnimationFrame(req);
                        canvas.removeEventListener("click", menuClick);
                        drawMenu();
                    }
                }

                canvas.addEventListener("click", menuClick)
                
                ctx.font = '30px Arial';
                ctx.fillStyle = "#5b9296";
                ctx.fillText("Instructions", 275, 40);
                
                ctx.font = '15px Arial';
                ctx.fillStyle = "#5b9296";
                ctx.fillText("Your color is blue", 295, 80);
                ctx.fillText("The number inside each base is the attack power of the base", 140, 115);
                ctx.fillText("Click and hold on blue base, drag mouse to the green base and release to target it", 100, 150);
                ctx.fillText("If a base's number goes below 0, it's ownership will change", 140, 280);
                ctx.fillText("White bases are neutral and will not attack", 140, 315);
                ctx.fillText("Take control of all enemy bases to win", 220, 370);
            })
        });
        
        const drawMenu = () => {
            requestAnimationFrame(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const b1 = new Base({ x: 70, y: 40 }, 25, "#327f95");
                const b2 = new Base({ x: 550, y: 40 }, 25, "green");
                const b3 = new Base({ x: 500, y: 100 }, 25, "#d6d9ca");
                const b4 = new Base({ x: 550, y: 250 }, 25, "purple");
                const b5 = new Base({ x: 150, y: 180 }, 25, "red");
                b1.draw(ctx);
                b2.draw(ctx);
                b3.draw(ctx);
                b4.draw(ctx);
                b5.draw(ctx);
            })
            show(menu);
        };
        
        drawMenu();

        document.querySelectorAll('.back')[0].addEventListener('click', function () {
            hide(settings);
            show(menu);
        });
        
        const startGame = (playerCount, delay, baseNumber) => {  
            canvasEl.addEventListener("click", menuClick);
            
            function menuClick(e) {
                const mouse = getMouse(e);
                if (mouse.x < 80 && mouse.x > 0 && mouse.y < 30 && mouse.y > 0) {
                    cancelAnimationFrame(gameReq);
                    canvasEl.removeEventListener("click", menuClick);
                    drawMenu();
                }
            }
            
            function getMouse(event) {
                var rect = canvasEl.getBoundingClientRect();
                return {
                    x: (event.clientX - rect.left) / (rect.right - rect.left) * canvasEl.width,
                    y: (event.clientY - rect.top) / (rect.bottom - rect.top) * canvasEl.height
                };
            }
            
            const game = new Game(canvasEl, ctx, playerCount, delay, baseNumber, menuClick);  
            let gameReq = {};
            
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '20px Arial';
                ctx.fillStyle = "#327f95";
                ctx.fillText("Menu", 10, 17)
                
                game.drawGame();
                gameReq = requestAnimationFrame(draw);
            }
            
            requestAnimationFrame( () => {
                draw();
            })
        };     
});
