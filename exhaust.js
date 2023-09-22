const exhaustArr = []

class Exhaust {
    constructor() {
        // set coordinates of exhaust particles to orignate from robot's location
        this.x = robot.x
        this.y = robot.y
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5
        this.color = 'red'
    }


    
}