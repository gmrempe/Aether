class Weapon {
    constructor(posX, posY, color, delta, owner, target) {
        this.posX = posX + Math.random() * 25;
        this.posY = posY + Math.random() * 25;
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

        if(this.moves < 1) {
            // debugger
            this.owner.weapons.splice(this.owner.weapons.indexOf(this), 1);
            if(this.color === this.target.color) {
                this.target.counter += 0.5
            } else if (this.target.counter > 0) {
                this.target.counter -= 0.5;
            } else if (this.target.counter <= 0) {
                if (this.target.color === '#d6d9ca') {
                    setInterval(() => { this.target.incrementor() }, 1500);
                }
                this.target.color = this.color;
                this.target.counter = 5;
            }
        }

        this.posX -= this.dx;
        this.posY -= this.dy;
        this.moves -= 1;
    }

}

export default Weapon;