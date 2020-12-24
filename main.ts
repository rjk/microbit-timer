input.onButtonPressed(Button.A, function () {
    alarmMins = alarmMins + 1
    basic.showNumber(alarmMins)
})
function ShowTimer (num: number) {
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
    basic.showNumber(alarmMins)
})
input.onButtonPressed(Button.B, function () {
    ShowTimer(alarmMins)
    startTimeMs = input.runningTime()
    endTimeMs = startTimeMs + alarmMins * 1000
    minsLeft = alarmMins
    while (input.runningTime() < endTimeMs) {
        while ((endTimeMs - input.runningTime()) / 1000 < minsLeft) {
            FlashLed(minsLeft)
            basic.pause(200)
        }
        minsLeft = (endTimeMs - input.runningTime()) / 1000
    }
    ShowTimer(minsLeft)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Heart)
})
function FlashLed (ledNo: number) {
    led2 = ledNo - 1
    x = led2 % 5
    y = led2 / 5
    led.toggle(x, y)
    basic.pause(100)
    led.toggle(x, y)
}
let led2 = 0
let minsLeft = 0
let endTimeMs = 0
let startTimeMs = 0
let y = 0
let x = 0
let alarmMins = 0
alarmMins = 0
