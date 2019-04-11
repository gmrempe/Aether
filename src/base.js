class Base {
    constructor(posX, posY, color) {
        this.posX = posX,
        this.posY = posY,
        this.color = color
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

}

export default Base