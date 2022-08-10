radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.pause(2)
    radio2 = receivedNumber
})
let radio2 = 0
basic.showIcon(IconNames.Diamond)
radio.setGroup(7)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (radio2 == 1) {
        RingbitCar.freestyle(10, 75)
    } else if (radio2 == 2) {
        RingbitCar.brake()
        basic.pause(1000)
    } else {
        radio2 = 0
    }
})
basic.forever(function () {
	
})
