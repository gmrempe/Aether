import Player from "./player";

class AI extends Player {

    constructor(color, bases) {
        super(color)
        this.bases = bases;
        this.myBases = [];
        this.targetBases = [];
        setInterval( () => this.attackPatternMedium(), 3000);
    }

    attackPatternMedium() {
        this.sortBases();
        for(let j = 0; j < this.myBases.length; j++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (this.myBases[j].counter / 2))) {
                    this.swarm(this.myBases[j], this.targetBases[i])
                }
            }
        }
    }
     
    sortBases() {
        this.myBases = [];
        this.targetBases = [];
        for(let i = 0; i < this.bases.length; i++) {
            if ((this.bases[i].color === this.color) && (!this.myBases.includes(this.bases[i])))  {
                this.myBases.push(this.bases[i])
            } else if ((this.bases[i].color != this.color) && (!this.targetBases.includes(this.bases[i])))  {
                this.targetBases.push(this.bases[i])
            }
        }
    }
}

export default AI;