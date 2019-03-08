// Adds support for source maps on exception
import 'source-map-support/register';

// Imports the pin controlling library
import { Gpio } from 'pigpio';

// Initializes a test pin on pin 17 in output mode
const test = new Gpio(17, { mode: Gpio.OUTPUT });

// Sets the pin to full power

setInterval(() => {
  test.analogWrite(Math.floor(Math.random() * 255));
},          1000);
