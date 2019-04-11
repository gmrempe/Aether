class Base {
    constructor(posX, posY, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.counter = 0;
        this.incrementor = this.incrementor.bind(this);
        setInterval( () => {this.incrementor(ctx)}, 700);
    }

    incrementor(ctx) {
        if(this.color !== "#ffffff") {
            this.counter += 1
        }
    }
    
    drawCounter(ctx) {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillText(this.counter, this.posX -2, this.posY + 3);
    }
    
    drawBase(ctx) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 30, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,.65)';
        ctx.fill();
        ctx.closePath();
    }
    
    draw(ctx) {
        this.drawCounter(ctx);
        this.drawBase(ctx);
    }
        
}

export default Base;