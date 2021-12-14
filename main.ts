basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    100
    )
    serial.writeNumber(input.lightLevel())
})
