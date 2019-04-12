class Weapon {
    constructor(posX, posY, posX2, posY2, color) {
        this.posX = posX;
        this.posY = posY;
        this.posX2 = posX2;
        this.posY2 = posY2;
        this.color = color;
    }
    
    // distanceToBase(x1, y1, x2, y2) {
    //     const x = x2 - x1;
    //     const y = y2 - y1;

    //     return {
    //         distance: Math.sqrt(x * x + y * y),
    //         angle: Math.atan2(y, x) * 180 / Math.PI
    //     }
    // }

    // const mouseCoords = getMouseCoords();
    // const data = distanceToBase(base.x, base.y, mouse.x, mouse.y);
    // //Spread movement out over three seconds
    // const velocity = data.distance / 3;
    // const toMouseVector = new Vector(velocity, data.angle);


    drawWeapon(ctx) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

export default Weapon;