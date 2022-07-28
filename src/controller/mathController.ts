import express, { Request, Response } from 'express';
var router = express.Router();
import { sum } from '../model/math'

const isNumberValid = (number:any) => {
  return (number == null || isNaN(number)) ? false : true;
}

export function addTwoNumbers(req: Request, res: Response) {
  const firstNumber = req.body.firstNumber, 
        secondNumber = req.body.secondNumber

  if (isNumberValid(firstNumber) && isNumberValid(secondNumber)) {
    res.json({
      'data': sum(firstNumber, secondNumber)
    })
  } else {
    res.json({
      'error': 'Please provide two numbers'
    })
  }
}