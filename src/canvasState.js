
class CanvasState {
    constructor(canvas, player) {
        this.canvas = canvas
        this.selection = null;
        this.target = null;
        this.shapes = [];
        const myState = this;
        this.player = player;

        canvas.addEventListener('mousedown', (e) => {
            const mouse = myState.getMouse(e);
            const mx = mouse.x;
            const my = mouse.y;
            const shapes = myState.shapes;
            for (let i = 0; i < shapes.length; i++) {
                if (shapes[i].contains(mx, my) && shapes[i].color === this.player.color) { //match player color and mouse pos
                    const mySel = shapes[i];
                    myState.selection = mySel;
                    return;
                }
            }
            if (myState.selection) {
                myState.selection = null;
            }
        }, true);

        canvas.addEventListener('mouseup', (e) => {
            const mouse = myState.getMouse(e);
            const mx = mouse.x;
            const my = mouse.y;
            const shapes = myState.shapes;
            for (let i = 0; i < shapes.length; i++) {
                if (shapes[i].contains(mx, my)) {
                    const mySel = shapes[i];
                    myState.target = mySel;
                    this.player.swarm(this.selection, this.target);
                    return;
                }
            }   
            this.selection = null;        
        }, true);
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    getMouse(event) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
            y: (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
        };
    }

}

export default CanvasState;