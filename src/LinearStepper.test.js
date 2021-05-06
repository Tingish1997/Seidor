import {LinearStepper} from  "./LinearStepper.js";
import React from "react";
import { Functions } from '@material-ui/icons';
//test plugins for "Switch-case function"
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';

//test getSteps of Stepper
describe('getSteps', () => {
    it('should get texts of Stepper', () => {
      const text = 'Finish testing getSteps '
      const getSteps = ["Mis Datos","Pago",];          
      expect(["Mis Datos","Pago",]).toEqual(getSteps)
    })
})

//test switch case of stepper
test.each`
  a    | expected
  ${0} | $[<FirstStep/>]
  ${1} | $[<SecondStep/>]
  ${2} | $["unknown step"]
`('returns $expected when $a', ({a, expected}) => {
  expect(a).toBe(expected);
});

