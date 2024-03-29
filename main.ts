basic.forever(function () {
    if (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE)) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 100)
    } else {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 100)
    }
})
