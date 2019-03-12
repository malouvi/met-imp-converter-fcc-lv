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
    const pattern = /[a-zA-Z]/;
    const index = input.search(pattern);

    if (index !== 0) {
      result = input.slice(0, index);
      const bars = result.match(/\//g) ;
      if (bars && bars.length > 1) {
        result = 'invalid number';
      }
      else {
        try {
          result = eval(result);
          }
        catch (e)
          {
          result = 'invalid number';
          }  
      }
    }
    else result = 1;
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var validUnit = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    const pattern = /[a-zA-Z]/;
    result = input.slice(input.search(pattern));
    result = validUnit.find(val => val == result);
    if (result == undefined)
      return 'invalid unit';
    else
      return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      default:
        return 'invalid input unit';
                              }
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'mi':
        return 'milles';
      case 'km':
        return 'kilometres';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilogrammes';
      default:
        return 'invalid unit';
                              }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(isNaN(initNum))return result = 'invalid input number';
    switch(initUnit.toLowerCase()){
      case 'gal':
        return parseFloat((initNum*galToL).toFixed(5));
      case 'l':
        return parseFloat((initNum/galToL).toFixed(5));
      case 'lbs':
        return parseFloat((initNum*lbsToKg).toFixed(5));
      case 'kg':
        return parseFloat((initNum/lbsToKg).toFixed(5));
      case 'mi':
        return parseFloat((initNum*miToKm).toFixed(5));
      case 'km':
        return parseFloat((initNum/miToKm).toFixed(5));
      default:
        return 'invalid input unit';
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum  != 'invalid number' && initUnit !='invalid unit'){
      return initNum +' '+ this.spellOutUnit(initUnit) + ' converts to ' + returnNum +' '+ this.spellOutUnit(returnUnit);
    }
    if (initNum  == 'invalid number' && initUnit !='invalid unit') 
      return initNum;    
    if (initUnit == 'invalid unit' && initNum != 'invalid number')
      return initUnit;
    result = initNum + ' and unit';
    return   result;
  };
  
}

module.exports = ConvertHandler;
