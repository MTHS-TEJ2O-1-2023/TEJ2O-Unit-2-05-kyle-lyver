/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Sep 2023
 * This program shows the micro bit temperature in K
*/

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

// variable
let temperature: number

input.onButtonPressed(Button.A, function () {
// input
  temperature = input.temperature()
  temperature = (temperature + 273.15)
  temperature = Math.round(temperature)
  // output
  basic.showString('The temperature is: ' + (temperature).toString())
  basic.showString('K.')
})
