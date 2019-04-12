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

    if(fractionRegExp.test(input) === true && Number(input) !== NaN){
      if(input === "") {
        result = 1;
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

    return result;
  };

}

module.exports = ConvertHandler;
