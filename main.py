input.calibrate_compass()
radio.set_group(69)
north = -1
east = -1
south = -1
west = -1

def on_forever():
    if north == -1:
        if input.button_is_pressed(Button.A):
            pass
    elif False:
        pass
basic.forever(on_forever)
