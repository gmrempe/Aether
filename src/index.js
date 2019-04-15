import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('ui-wrapper');

    function hide(e) {
        e.target.style.display = 'none';
        e.currentTarget.parentElement.firstElementChild.style.display = 'none';
        e.currentTarget.parentElement.style.zIndex = '-1';
    }
    
    function show(e) {
        e.target.style.display = 'block';
        e.currentTarget.parentElement.firstElementChild.style.display = 'block';
        e.currentTarget.parentElement.style.zIndex = '2';
    }

    document.querySelectorAll('.play')[0].addEventListener('click', function (menu) {
        hide(menu);
        startGame(4);
    });

    function startGame(playerCount = 4) {  
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
    }
    
});
