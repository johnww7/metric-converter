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

    if(input === "") {
      console.log('empty input');
      return result = 1;
    }
    else if(/[^0-9\/\.]/.test(input)) {
      console.log('No decimal or fraction');
      return result = 'invalid number';
    }
    /*else if((input.match(/\//g)||[]).length >= 2 || (input.match(/\./g)||[]).length >= 2) {
      console.log('Too many decimal and slashes');
      return result = 'invalid number';
    }*/
    else if((input.match(/[\/\.]/g)||[]).length >= 2) {
      console.log('Too many decimal and slashes');
      return result = 'invalid number';
    }
    else {
      console.log('Return number: ' + eval(input));
      return result = eval(input);
    }

    /*if((fractionRegExp.test(input) === true && Number(input) !== NaN) || Number.isInteger(eval(input))){
      if(/[^0-9\/\.]/.test(input)) {
        return result = 'invalid number';
      }
      else if(/[\/{2,}\.{2,}]/.test(input)) {
        return result = 'invalid number';
      }
      else {
        return result = eval(input);
      }
    }
    else if(input === "") {
      return result = 1;
    }
    else {
      return result = 'invalid number';
    }*/
    //return result;
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
        result = 'l';
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
        result = 'l';
        break;
      case 'l':
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
      case 'l':
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
      case 'l':
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
    if(initNum === 'invalid number' && initUnit === 'invalid unit') {
      return result = 'invalid number and unit';
    }
    else if(initNum === 'invalid number') {
      return result = 'invalid number';
    }
    else if(initUnit === 'invalid unit') {
      return result = 'invalid unit';
    }
    else {
      //let stringInitUnit = spellOutUnit(initUnit);
      //let stringRetUnit =
      var resultString = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +
       Number(Math.round(returnNum+'e5')+'e-5') + ' ' + this.spellOutUnit(returnUnit);
       //Number(Math.round(returnNum+'e5')+'e-5')
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
