import Player from "./player";

class AI extends Player {

    constructor(props, bases) {
        super(props)
        this.bases = bases;
        this.myBases = [];
        this.targetBases = [];
        setInterval( () => this.attack(), 3000);
    }

    attack() {
        this.sortBases();
        for(let i = 0; i < this.myBases.length; i++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (myBases[i].counter / 2))) {
                    this.swarm(myBases[i], targetBases[i])
                }
            }
        }
    }
     
    sortBases() {
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