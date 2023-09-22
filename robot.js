class Robot {
    // constructor function holds blueprints for the <class Robot>
    constructor() {
        this.x = 150
        this.y = 200
        // vy = velocity & y-coordinate (this determines speed that Robot moves up & down)
        this.vy = 0 
        this.width = 20
        this.height = 20
        // weight - determins amount of force pulling down on Robot
        this.weight = 1
    }

    // using update method to calculate position & speed of player character (robot) for each frame of animation 
    update() {
        let curve = Math.sin(angle) * 20

        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve
            this.vy = 0
        } else {
            this.vy += this.weight
            this.vy *= 0.9
            this.y += this.vy
        }

        if (this.y < 0 + this.height) {
            this.y = 0 + this.height
            this.vy = 0
        }

        if (spacePressed && this.y > this.height * 3) this.flap()

    }


    // draw method to show player character on screen (using rectangle as placeholder) 
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }


    flap() {
        this.vy -= 2
    }


}

const robot = new Robot()