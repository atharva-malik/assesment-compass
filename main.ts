input.calibrateCompass()
radio.setGroup(69)
let north = -1
let east = -1
let south = -1
let west = -1
basic.forever(function () {
    if (north == -1) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        if (input.buttonIsPressed(Button.A)) {
            north = input.compassHeading()
        }
    } else if (east == -1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            east = input.compassHeading()
        }
    } else if (south == -1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            south = input.compassHeading()
        }
    } else if (west == -1) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            . # . # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            west = 0
        }
    } else {
    	
    }
})
