import Weapon from "./weapon";

class Player {
    constructor(color) {
        this.color = color;
        this.weapons = [];
        this.me = this;
    }
    
    swarm(base, target) {
        if (base) {
            const delta = this.deltaMovement(base, target);
            const num = base.counter;
            base.counter = base.counter - Math.floor(base.counter / 2);  //generate num of weapons
            for(let i = 0; i < num; i++) {
            this.weapons.push(new Weapon (base.posX, base.posY, this.color, delta, this.me, target));
            }
        }
    }

    deltaMovement(base, target) {
        if (base) {
            const data = this.distanceToBase(base.posX, base.posY, target.posX, target.posY);
            const moves = data.distance / 2;
            const x = (base.posX - target.posX) / moves;
            const y = (base.posY - target.posY) / moves;
            return {dx: x, dy: y, moves: moves}
        }
    }

    distanceToBase(x1, y1, x2, y2) {
        const x = x2 - x1;
        const y = y2 - y1;

        return {
            distance: Math.sqrt(x * x + y * y),
            // angle: Math.atan2(y, x) * 180 / Math.PI    for vector
        }
    }

    playerDraw(ctx) {
        this.weapons.forEach(weapon => weapon.weaponDraw(ctx))
    }

}

export default Player;