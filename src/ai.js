import Player from "./player";
// import CanvasState from "./canvasState";

class AI extends Player {

    constructor(props, bases) {
        super(props)
        this.bases = bases;
        this.myBases = [];
        // this.shapes = CanvasState.shapes;
    }

    // attack() {
    //     for(let i = 0; i < this.bases.length; i++) {
    //         if((bases[i].color != this.color) && (bases[i].counter < )) {
        
    //         }
    //     }
    // }
            //find all of my bases, 
            // interate through each one and call swarm if counter less than mine
            
    myBases() {
        for(let i = 0; i < this.bases.length; i++) {
            if ((this.bases[i].color === this.color) && (!this.myBases.includes(this.bases[i])))  {
                this.myBases.push(this.bases[i])
            }
        }
    }
}

export default AI;