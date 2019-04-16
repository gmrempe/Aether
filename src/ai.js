import Player from "./player";

class AI extends Player {

    constructor(color, bases, pattern, delay) {
        super(color)
        this.bases = bases;
        this.myBases = [];
        this.targetBases = [];
        this.pattern = pattern;
        this.delay = delay;
        this.madeAttack = true;
        if(this.pattern === 1) {
            setInterval( () => this.attackPatternMedium(), this.delay);
        } else if (this.pattern === 2) {
            setInterval( () => this.attackPatternAgressive(), this.delay);
        } else {
            setInterval( () => this.attackPatternEasy(), this.delay);
        }
    }

    attackPatternMedium() {
        this.sortBases();
        for(let j = 0; j < this.myBases.length; j++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (this.myBases[j].counter / 2))) {
                    this.swarm(this.myBases[j], this.targetBases[i])
                    this.madeAttack = true;
                    setTimeout( () => this.madeAttack = false, 10000);
                } else {
                    this.breakDeadLock();
                }
            }
        }
    }
    
    attackPatternAgressive() {
        this.sortBases();
        for(let j = 0; j < this.myBases.length; j++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (this.myBases[j].counter / 3))) {
                    this.swarm(this.myBases[j], this.targetBases[i])
                    this.madeAttack = true;
                    setTimeout(() => this.madeAttack = false, 10000);
                } else {
                    this.breakDeadLock();
                }
            }
        }
    }
    
    attackPatternEasy() {
        this.sortBases();
        for(let j = 0; j < this.myBases.length; j++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (this.myBases[j].counter / 1.5))) {
                    this.swarm(this.myBases[j], this.targetBases[i])
                    this.madeAttack = true;
                    setTimeout(() => this.madeAttack = false, 10000);
                } else {
                    this.breakDeadLock();
                }
            }
        }
    }

    breakDeadLock() {
        if(this.madeAttack === false) {
            this.swarm(this.myBases[0], this.targetBases[0])
        }
    }
    
    sortBases() {
        this.myBases = [];
        this.targetBases = [];
        for(let i = 0; i < this.bases.length; i++) {
            if (this.bases[i].color === this.color) {
                this.myBases.push(this.bases[i])
            } else if ((this.bases[i].color != this.color) && (!this.targetBases.includes(this.bases[i])))  {
                this.targetBases.push(this.bases[i])
            }
        }
    }
}

export default AI;