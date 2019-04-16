import Game from "./game";
import Base from "./base";

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('ui-wrapper');
    let canvasEl = document.getElementById("canvas");
    let ctx = canvasEl.getContext("2d");
    requestAnimationFrame( () => {
        const b1 = new Base({ x: 70, y: 40 }, 25, "#327f95");
        const b2 = new Base({ x: 550, y: 40 }, 25, "green");
        const b3 = new Base({ x: 500, y: 100 }, 25, "#d6d9ca");
        const b4 = new Base({x: 550, y: 250}, 25, "purple");
        const b5 = new Base({x: 170, y: 180}, 25, "red");
        b1.draw(ctx);
        b2.draw(ctx);
        b3.draw(ctx);
        b4.draw(ctx);
        b5.draw(ctx);
    })
    
    function hide(e) {
        e.target.style.display = 'none';
        e.currentTarget.parentElement.firstElementChild.style.display = 'none';
        e.currentTarget.parentElement.style.zIndex = '-1';
    };
    
    function show(e) {
        e.target.style.display = 'block';
        e.currentTarget.parentElement.firstElementChild.style.display = 'block';
        e.currentTarget.parentElement.style.zIndex = '2';
    };
    
    document.querySelectorAll('.play')[0].addEventListener('click', function (menu) {
        hide(menu);
        startGame(4);
    });
});

 const startGame = (playerCount = 4) => {  
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const game = new Game(canvasEl, ctx, playerCount);  
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.drawGame();
        requestAnimationFrame(draw);
    }

    requestAnimationFrame( () => {
        draw();
    })
};

export default startGame;