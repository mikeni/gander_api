import { addTwoNumbers } from '../../src/controller/mathController';
import { Request, Response } from 'express';
var httpMocks = require('node-mocks-http');

describe('addTwoNumbers', function () {

    test('responds successfully with correct param types', () => {
      const request  = httpMocks.createRequest({
        body: {
          firstNumber: 2,
          secondNumber: 3
        }
      });

      const response = httpMocks.createResponse();

      addTwoNumbers(request, response);
      let jsonData = response._getJSONData();

      expect(jsonData.data).toEqual(5);
    });

    test('responds with error message with incorrect string param type', () => {
      const request  = httpMocks.createRequest({
        body: {
          firstNumber: "wrong",
          secondNumber: 3
        }
      });

      const response = httpMocks.createResponse();

      addTwoNumbers(request, response);
      let jsonData = response._getJSONData();

      expect(jsonData.error).toEqual("Please provide two numbers");
    });

    test('responds with error message with incorrect null param type', () => {
      const request  = httpMocks.createRequest({
        body: {
          firstNumber: null,
          secondNumber: 3
        }
      });

      const response = httpMocks.createResponse();

      addTwoNumbers(request, response);
      let jsonData = response._getJSONData();

      expect(jsonData.error).toEqual("Please provide two numbers");
    });

});