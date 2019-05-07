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
      console.log('original input: ' + input);

      var initNum = convertHandler.getNum(input);
      console.log('Init Num: ' + typeof(initNum) + 'value: ' + initNum);
      var initUnit = convertHandler.getUnit(input);
      console.log('Initial Unit: ' + initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('Converted Num: ' + returnNum + ' Converted Unit: ' + returnUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log('result: ' + toString);
      res.json(toString);
    
    });

};
