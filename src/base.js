
class Base {
    constructor(pos, radius, color) {
        this.posX = pos.x;
        this.posY = pos.y;
        this.radius = radius;
        this.color = color;
        this.counter = 5;
        this.incrementor = this.incrementor.bind(this);
        if (this.color != '#d6d9ca') {
            setInterval( () => {this.incrementor()}, 1500);
        }
    }

    incrementor() {
        if(this.counter <= 25) {
            this.counter += 1
        } else if (this.counter > 25) {
            this.counter += 2
        }
    }

    contains(mx, my) {
        return (this.posX + this.radius >= mx) && (this.posX - this.radius <= mx) &&
            (this.posY + this.radius >= my) && (this.posY - this.radius <= my);
    }
    
    drawCounter(ctx) {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillText(this.counter, this.posX -2, this.posY + 3);
    }
    
    drawBase(ctx) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 11;
        ctx.stroke();
        ctx.fillStyle = 'rgba(0,0,0,.65)';
        ctx.fill();
        ctx.closePath();
    }
    
    draw(ctx) {
        this.drawBase(ctx);
        this.drawCounter(ctx);
    }
        
}

export default Base;