// Adds support for source maps on exception
import 'source-map-support/register';

// Imports the pin controlling library
import { Gpio } from 'pigpio';

console.log('Running...');

// Initializes a test pin on pin 17 in output mode
const test = new Gpio(17, { mode: Gpio.OUTPUT });

setInterval(() => {
  const date = new Date(Date.now());

  console.log(date.getSeconds(), date.getSeconds() * date.getMilliseconds() / 60000 * 255);

  test.analogWrite(Math.round(date.getSeconds() / 60 * 255));
},          10);
