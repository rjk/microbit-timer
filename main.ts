input.onButtonPressed(Button.A, function () {
    alarmMins = alarmMins + 1
    basic.showNumber(alarmMins)
})
function ShowTimer (num: number) {
    basic.showString("!")
    basic.pause(250)
    basic.showNumber(num)
    basic.pause(250)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 0
    y = 0
    for (let index = 0; index <= num - 1; index++) {
        basic.pause(100)
        led.plot(x, y)
        x = x + 1
        if (x == 5) {
            y = y + 1
            x = 0
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    alarmMins = 0
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    ShowTimer(alarmMins)
    while (true) {
        basic.pause(1000)
    }
})
function FlashLed (ledNo: number) {
	
}
let y = 0
let x = 0
let alarmMins = 0
alarmMins = 0
basic.forever(function () {
	
})
