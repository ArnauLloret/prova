basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    serial.writeNumber(input.lightLevel())
})
