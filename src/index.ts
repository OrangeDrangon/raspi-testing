// Adds support for source maps on exception
import 'source-map-support/register';

// Imports the pin controlling library
import { Gpio } from 'pigpio';

// Initializes a test pin on pin 17 in output mode
const test = new Gpio(17, { mode: Gpio.OUTPUT });

let i = 0;
setInterval(() => {
  test.analogWrite(i);
  i += 1;
  if (i > 255) {
    i = 0;
  }
},          100);
