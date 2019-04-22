/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var formatInput = input.replace(/\s+/g, '');
      var indexOfFirstCharc = formatInput.search(/[A-Za-z]/);
      console.log(indexOfFirstCharc);
      var inputNumber = formatInput.slice(0, indexOfFirstCharc);
      var inputUnit = formatInput.slice(indexOfFirstCharc);
      console.log('num: ' + inputNumber + ' unit: ' + inputUnit);

      var initNum = convertHandler.getNum(inputNumber);
      console.log('Init Num: ' + typeof(initNum));
      var initUnit = convertHandler.getUnit(inputUnit);
      console.log('Initial Unit: ' + initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('Converted Num: ' + returnNum + ' Converted Unit: ' + returnUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log('result: ' + toString);
      res.json(toString);
      //res.json
    });

};
