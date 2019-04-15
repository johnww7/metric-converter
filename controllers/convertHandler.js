/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var result;
    let fractionRegExp = /[\/\.]/i;

    if((fractionRegExp.test(input) === true && Number(input) !== NaN) || Number.isInteger(eval(input))){
      if(input === "") {
        result = 1;
      }
      else if(/[^0-9\/\.]/.test(input)) {
        return result = 'invalid number';
      }
      else {
        result = eval(input);
      }
    }
    else {
      return result = 'invalid number';
    }
    return result;
  };

  this.getUnit = function(input) {
    var result;
    switch (input) {
      case 'gal':
        result = 'gal';
        break;
      case 'lbs':
      case 'lb':
        result = 'lbs';
        break;
      case 'L':
      case 'l':
        result = 'L';
        break;
      case 'kg':
        result = 'kg';
        break;
      case 'mi':
        result = 'mi';
        break;
      case 'km':
        result = 'km';
        break;
      default:
        result = 'invalid unit';
        break;
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case 'gal':
        result = 'gallon';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = 'invalid unit';
        break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = (initNum === 'invalid number')  ? 'invalid number and unit' : initNum;
        //result = 'invalid unit';
        break;
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initNum === 'invalid number') {
      return result = 'invalid number';
    }
    else if(initUnit === 'invalid unit') {
      return result = 'invalid unit';
    }
    else if(initNum === 'invalid number' && initUnit === 'invalid unit') {
      return result = 'invalid number and unit';
    }
    else {
      //let stringInitUnit = spellOutUnit(initUnit);
      //let stringRetUnit =
      var resultString = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +
       returnNum + ' ' + this.spellOutUnit(returnUnit);

      return result = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: resultString
      };
    }
  };

}

module.exports = ConvertHandler;
