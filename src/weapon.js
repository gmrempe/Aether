class Weapon {
    constructor(posX, posY, color, delta, owner, target) {
        this.posX = posX + Math.random() * 20;
        this.posY = posY + Math.random() * 20;
        this.color = color;
        this.dx = delta.dx;
        this.dy = delta.dy;
        this.moves = delta.moves;
        this.owner = owner;
        this.target = target;
    }

    weaponDraw(ctx) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        if(this.moves <= 0) {
            // this.target.counter -= 1;
            this.owner.weapons.pop();
        }

        this.posX -= this.dx;
        this.posY -= this.dy;
        this.moves -= 1;
    }

}

export default Weapon;