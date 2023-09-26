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

input.onButtonPressed(Button.A, function (){
    temperature = input.temperature()
    basic.showString('The temperature is')
    basic.showNumber(input.temperature() + 273)
    basic.showString('K.')
})

