import RPi.GPIO as GPIO
import time
#GPIO.setmode(GPIO.BCM)

TRIG = 23
ECHO = 24

print "initializing parking service"

GPIO.setup(TRIG,GPIO.OUT)
GPIO.setup(TRIG,GPIO.IN)
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(8, GPIO.OUT, initial=GPIO.LOW)


while True:
    GPIO.output(TRIG, False)
    print "Waiting for sensor to settle"
    time.sleep(2)

    GPIO.output(TRIG, True)
    time.sleep(0.0001)
    GPIO.output(TRIG, False)

    while GPIO.input(ECHO)==0:
        pulse_start = time.time()

    while GPIO.input(ECHO)==1:
        pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start

    distance = pulse_duration * 17150

    distance = round(distance, 2)

    if distance < 10:
        GPIO.output(8, GPIO.HIGH)
    else:
        GPIO.output(8, GPIO.LOW)

GPIO.cleanup()