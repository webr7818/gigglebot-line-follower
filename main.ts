gigglebot.setSpeed(gigglebotWhichMotor.Both, 60)
let threshold = 150
let right = 0
let left = 0
while (true) {
    if (input.buttonIsPressed(Button.AB)) {
        left = gigglebot.lineReadSensor(gigglebotWhichTurnDirection.Left)
        right = gigglebot.lineReadSensor(gigglebotWhichTurnDirection.Right)
        basic.showString("" + ("" + left))
        basic.showString("" + ("" + right))
    }
    
    if (input.buttonIsPressed(Button.A)) {
        while (!input.buttonIsPressed(Button.B)) {
            left = gigglebot.lineReadSensor(gigglebotWhichTurnDirection.Left)
            right = gigglebot.lineReadSensor(gigglebotWhichTurnDirection.Right)
            if (left < threshold && right < threshold) {
                lights.whichEye(gigglebotWhichEye.Both)
                gigglebot.driveStraight(gigglebotWhichDriveDirection.Backward)
            } else if (right > threshold && left < threshold) {
                gigglebot.stop()
                break
            } else if (left > threshold && right < threshold) {
                gigglebot.turn(gigglebotWhichTurnDirection.Right)
            } else if (right > threshold && left < threshold) {
                gigglebot.turn(gigglebotWhichTurnDirection.Left)
            }
            
        }
        gigglebot.stop()
    }
    
}
