/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    let result = 0;
    let formatInput = input.replace(/\s+/g, '');
    let indexOfFirstCharc = formatInput.search(/[A-Za-z]/);
    console.log('index: ' + indexOfFirstCharc);
    let inputNumber = formatInput.slice(0, indexOfFirstCharc);
    let fractionRegExp = /[\/\.]/i;
    console.log('inital number input: ' + inputNumber + ' type: ' + typeof(inputNumber));
    if(inputNumber === "") {
      console.log('empty input');
      let emptyInput = 1;
      return emptyInput;
    }
    else if(/[^0-9\/\.]/.test(inputNumber)) {
      console.log('No decimal or fraction');
       return 'invalid number';
    }
    else if((input.match(/\//g)||[]).length >= 2 || (input.match(/\./g)||[]).length >= 2) {
      console.log('Too many decimal and slashes');
       return 'invalid number';
    }

    else {
      result = eval(inputNumber)
      if(result === undefined)
      {
          console.log('evaluation error');
      }
      console.log('Return number: ' + eval(inputNumber) + ' type: ' + typeof(eval(inputNumber)));
      return result;
    }

  };

  this.getUnit = function(input) {
    let result;
    let formatInput = input.replace(/\s+/g, '');
    let indexOfFirstCharc = formatInput.search(/[A-Za-z]/);
    let inputUnit = formatInput.slice(indexOfFirstCharc);

    switch (inputUnit) {
      case 'gal':
      case 'GAL':
        result = 'gal';
        break;
      case 'lbs':
      case 'LBS':
        result = 'lbs';
        break;
      case 'L':
      case 'l':
        result = 'l';
        break;
      case 'kg':
      case 'KG':
        result = 'kg';
        break;
      case 'mi':
      case 'MI':
        result = 'mi';
        break;
      case 'km':
      case 'KM':
        result = 'km';
        break;
      default:
        result = 'invalid unit';
        break;
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
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
    let result;
    switch(unit) {
      case 'gal':
        result = 'gallons';
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
    let result;

    if(initNum === 'invalid number') {
      return 'invalid number';
    }

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
        result = 'invalid number';
        break;
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    if(initNum === 'invalid number' && initUnit === 'invalid unit') {
      return result = {
        initNum: 'invalid number',
        initUnit: 'invalid unit',
        string: 'invalid number and unit'
      };
    }
    else if(initNum === 'invalid number') {
      return result = {
        initNum: 'invalid number',
        string: 'invalid number'
      };
    }
    else if(initUnit === 'invalid unit') {
      return result = {
        initUnit: 'invalid unit',
        string: 'invalid unit'
      };
    }
    else {
      let resultString = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +
       Number(Math.round(returnNum+'e5')+'e-5') + ' ' + this.spellOutUnit(returnUnit);

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
