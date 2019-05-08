/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  //--------------------------------------------------------------
  //Function tests input to see if it's a valid number or not, if so
  //returns either 1 if empty input or returns converted string to number
  //---------------------------------------------------------------
  this.getNum = function(input) {
    let result = 0;
    let formatInput = input.replace(/\s+/g, '');
    let indexOfFirstCharc = formatInput.search(/[A-Za-z]/);
    let inputNumber = formatInput.slice(0, indexOfFirstCharc);
    let fractionRegExp = /[\/\.]/i;
    if(inputNumber === "") {
      console.log('empty input');
      let emptyInput = 1;
      return emptyInput;
    }
    else if(/[^0-9\/\.]/.test(inputNumber)) {
       return 'invalid number';
    }
    else if((input.match(/\//g)||[]).length >= 2 || (input.match(/\./g)||[]).length >= 2) {
       return 'invalid number';
    }

    else {
      result = eval(inputNumber)
      if(result === undefined)
      {
          console.log('evaluation error');
      }
      return result;
    }

  };

  //-------------------------------------------------------------------------
  //Functions tests input for valid string unit, if valid returns unit and if
  //not returns invalid unit.
  //-----------------------------------------------------------------------
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

  //-------------------------------------------------------------------------
  //Function converts valid initUnit parameter into converted unit, if unit
  //doesn't exist returns invalid unit.
  //------------------------------------------------------------------------
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

  //--------------------------------------------------------------------
  //Function returns spelled out unit of unit parameter if it's a valid unit,
  //if it doesn't exist returns invalid unit.
  //--------------------------------------------------------------------
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

  //-----------------------------------------------------------------------
  //Function converts initNum based on initUnit value into converted Number
  //if initUnit is a valid unit. If not a valid unit returns invalid number.
  //-----------------------------------------------------------------------
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

  //------------------------------------------------------------------------
  //Function returns an object based on initNum, initUnit, returnNum, and returnUnit
  //values and a string format based on function parameters.
  //---------------------------------------------------------------------------- 
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
