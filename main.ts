let degrees = 0
input.calibrateCompass()
radio.setGroup(70)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
        radio.sendString("N")
    } else if (degrees < 135) {
        radio.sendString("E")
        basic.showString("E")
    } else if (degrees < 225) {
        radio.sendString("S")
        basic.showString("S")
    } else if (degrees < 315) {
        radio.sendString("W")
        basic.showString("W")
    } else {
        radio.sendString("N")
        basic.showString("N")
    }
})
