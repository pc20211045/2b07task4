let x_value = 0
let y_value = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(500)
        x_value += 1
    }
    if (x_value >= 5) {
        x_value = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y_value)
        basic.pause(500)
        y_value += 1
    }
    if (y_value >= 5) {
        y_value = 0
    }
})
