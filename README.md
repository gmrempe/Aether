# Aether
 Aether pits the user against 1 to 3 AI players with the goal of taking control of all the circles.

Game Menu
![Game Menu](https://github.com/gmrempe/Aether/blob/master/images/Screen%20Shot%202019-04-21%20at%209.35.43%20PM.png)

Settings Menu
![Adjust Game Settings](https://github.com/gmrempe/Aether/blob/master/images/Screen%20Shot%202019-04-21%20at%209.36.09%20PM.png)

# Weapon Animation
Coordinates are grabbed from mousedown and mouseup events and then used to calculate distance with the pythagorean theorem. The distance is then divided by 2 to give a speed for smooth animation. The following picture shows multiple attacks occuring simultaneously.

During Game, Player is blue, weapons are small colored circles
![Player losing in game](https://github.com/gmrempe/Aether/blob/master/images/Screen%20Shot%202019-04-21%20at%209.36.38%20PM.png)

# AI targeting
Every game is generated with a randomized map using a random number for x and y coordinates on the canvas, AI players then sort all instances of bases in two arrays, one for their bases and one for target bases. The AI then iterates through both it's own bases and target bases and attacks any base with a number that is less than half the number in the AI's base.

Each AI uses a different attack pattern for targeting.
```javascript
    attackPatternMedium() {
        this.sortBases();
        for(let j = 0; j < this.myBases.length; j++) {
            for(let i = 0; i < this.targetBases.length; i++) {
                if((this.targetBases[i].counter < (this.myBases[j].counter / 2))) {
                    this.swarm(this.myBases[j], this.targetBases[i])
```
