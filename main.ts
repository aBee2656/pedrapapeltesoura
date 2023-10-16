let Mão = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.pause(1000)
    basic.showString("2")
    basic.pause(1000)
    basic.showString("1")
    basic.pause(1000)
    Mão = randint(0, 2)
    if (Mão == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
        if (Mão == 1) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . # # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
basic.forever(function () {
	
})
