input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(200)
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(500)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
