gigglebot.set_speed(gigglebotWhichMotor.BOTH, 60)
threshold = 150
right = 0
left = 0

while True:
    if input.button_is_pressed(Button.AB):
        left = gigglebot.line_read_sensor(gigglebotWhichTurnDirection.LEFT)
        right = gigglebot.line_read_sensor(gigglebotWhichTurnDirection.RIGHT)
        basic.show_string("" + str((left)))
        basic.show_string("" + str((right)))
    if input.button_is_pressed(Button.A):
        while not input.button_is_pressed(Button.B):
            left = gigglebot.line_read_sensor(gigglebotWhichTurnDirection.LEFT)
            right = gigglebot.line_read_sensor(gigglebotWhichTurnDirection.RIGHT)
            if left < threshold and right < threshold:
                lights.which_eye(gigglebotWhichEye.BOTH)
                gigglebot.drive_straight(gigglebotWhichDriveDirection.BACKWARD)
            elif right > threshold and left < threshold:
                gigglebot.stop()
                break
            elif left > threshold and right < threshold:
                gigglebot.turn(gigglebotWhichTurnDirection.RIGHT)
            elif right > threshold and left < threshold:
                gigglebot.turn(gigglebotWhichTurnDirection.LEFT)
        gigglebot.stop()
