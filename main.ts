input.onButtonPressed(Button.A, function () {
    alarmMins = alarmMins + 1
    basic.showNumber(alarmMins)
})
function ShowTimer (num: number, animate: boolean) {
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
        if (animate) {
            basic.pause(100)
        }
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
    ShowTimer(alarmMins, true)
    startTimeMs = input.runningTime()
    endTimeMs = startTimeMs + alarmMins * msPerMinute
    minsLeft = Math.floor((endTimeMs - input.runningTime()) / msPerMinute)
    while (input.runningTime() < endTimeMs) {
        console.log("start: " + startTimeMs + ", end: " + endTimeMs 
            + ", minsLeft: " + minsLeft + ", runtime: " + input.runningTime())
        ShowTimer(minsLeft+1, false)
        while (input.runningTime() < endTimeMs - minsLeft * msPerMinute) {
            console.log(" - start: " + startTimeMs + ", end: " + endTimeMs 
                + ", minsLeft: " + minsLeft + ", runtime: " + input.runningTime())
            FlashLed(minsLeft+1)
            basic.pause(100)
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
        minsLeft = Math.floor((endTimeMs - input.runningTime()) / msPerMinute)
    }
    soundExpression.giggle.play()
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
let y = 0
let x = 0
let msPerMinute = 0
let alarmMins = 0
let startTimeMs = 0
let endTimeMs = 0
let minsLeft = 0
alarmMins = 0
msPerMinute = 5000
