let tempC = 0
let tempF = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString(" C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 273)
    basic.showString(" K")
})
input.onButtonPressed(Button.B, function () {
    tempC = input.temperature()
    tempF = (tempC + 32) * 1.8
    basic.showNumber(tempF)
    basic.showString(" F")
})
