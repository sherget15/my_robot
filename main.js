const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

// determine whether or not spacebar is being pressed
let spacePressed = false
// angle will be used by Math.side method to make avatar move slightly up and down while idle 
let angle = 0
// use hue to cycle through multiple colors of player (or whatever... maybe footsteps...)
let hue = 0 
// frame keeps track of frame count of our animation loop so we can add any periodic triggers for game, like making obstacles appear
let frame = 0
let score = 0
// gamespeed needs to be global variable so that we can make all elements move at same speed
let gamespeed = 2


function animate() {
    // call 'clearRect' to clear entire canvas between every frame of animation
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // use 'fillRect' to show rectangle as placeholder for the player character
    // ctx.fillRect(10, canvas.height - 90, 50, 50)

    // update will calculate player position, speed, & draw 
    robot.update()
    // draw will draw rectangle at new coordinates
    robot.draw()
    handleObstacles()
    handleExhaust()
    requestAnimationFrame(animate)
    // multiplying by 0.12 slows down player-character's bounce speed 
    angle += 0.12
    hue++
}
animate()


// event listener for 'keydown' events, this will now return 'true' when player is pressing the spacebar('Space')
window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') spacePressed = true
})

// event listener for 'keyup' events, this will now return 'false' when player is NOT pressing the spacebar('Space')
window.addEventListener('keyup', function(e) {
    if (e.code === 'Space') spacePressed = false
})

