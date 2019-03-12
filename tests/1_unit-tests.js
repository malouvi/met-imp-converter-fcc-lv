/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '2.0L';
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '32.5mi';
      assert.equal(convertHandler.getNum(input),32.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '5/2l';
      assert.equal(convertHandler.getNum(input),2.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '26.4/2l';
      assert.equal(convertHandler.getNum(input),13.2);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {//esto esta mal
      const input = '4/2/2l';
      assert.equal(convertHandler.getNum(input),'invalid number');     
      done();
    });
    
    test('No Numerical Input', function(done) {//esto esta mal
       const input = '5$.hip';  
      assert.equal(convertHandler.getNum(input),'invalid number');  
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit('45'+ele),ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input ='45ghip';
      assert.equal(convertHandler.getUnit(input),'invalid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','milles','kilometres','pounds','kilogrammes'];
      
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
       var input = [5, 'L'];
      var expected = 1.320860;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
       var input = [5, 'Mi'];
      var expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
       var input = [5, 'Km'];
      var expected = 3.106856;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
       var input = [5, 'Lbs'];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'Kg'];
      var expected = 11.02311;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});