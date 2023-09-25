const exhaustArr = []

class Exhaust {
    constructor() {
        // set coordinates of exhaust particles to orignate from robot's location
        this.x = robot.x
        this.y = robot.y
        // set size of exhaust particles to random
        this.size = Math.random() * 7 + 3
        // set how fast exhaust particles move up & down to random so they kind of look like smoke 
        this.speedY = (Math.random() * 1) - 0.5
        // make color of exhaust particles continuously alternate
        this.color = 'hsla(' + hue + ', 100%, 50%, 0.8)'
    }


    update() {
        // make exhaust particles move to the left of screen 
        this.x -= gamespeed
        // make exhaust particles move up & down randomly so they kind of look like smoke 
        this.y += this.speedY
    }


    draw() {
        ctx.fillstyle = this.color
        // begin drawing
        ctx.beginPath()
        // use ctx.arc() so it draws a circle
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}


function handleExhaust() {
    // targeting exhaustArr w 'unshift' method to add new attributes to start of array when they are passed to this function
    exhaustArr.unshift(new Exhaust)
    // 'let' in below for-loop not used in tutorial...
    for (i = 0; i < exhaustArr.length; i++) {
        // update every exhaust particle before it is drawn 
        exhaustArr[i].update()
        // draw each particle on screen after all attributes have been updated
        exhaustArr[i].draw()
    }

    // if exhaustArr.length is more than 200, then remove 20 exhaust particles
    // this is to keep exhaustArr from being drawn endlessy on screen
    if (exhaustArr.length > 200) {
        for (let i = 0; i < 20; i++) {
            exhaustArr.pop(exhaustArr[i])
        }
    }


}

