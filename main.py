rightTrackingSensor = 0
leftTrackingSensor = 0
aligned = 0

def on_forever():
    global leftTrackingSensor, aligned
    if aligned == 0:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 128)
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0:
            maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 128)
            leftTrackingSensor = 1
            while leftTrackingSensor == 1:
                if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1:
                    leftTrackingSensor = 0
                maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 128)
                basic.pause(100)
                maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 128)
                maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 128)
                if maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0:
                    leftTrackingSensor = 0
                    aligned = 1
    else:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 0)
basic.forever(on_forever)
