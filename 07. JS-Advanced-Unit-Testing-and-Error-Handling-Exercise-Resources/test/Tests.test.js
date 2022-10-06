const assert = require('chai').assert;
const {isOddOrEven, lookupChar, mathEnforcer} = require('../UnitTest.js');
describe('isOddOrEven', () => {
    it('should return undefined', function () {
        //assert.expect(isOddOrEven(56)).to.equal(undefined);
        assert.equal(isOddOrEven(56), undefined);
    });
    it('should return even', function () {
        //assert.expect(isOddOrEven("1234")).to.equal("even");
        assert.equal(isOddOrEven("1234"), "even");
    });
    it('should return odd', function () {
        //assert.expect(isOddOrEven("12345")).to.equal("odd");
        assert.equal(isOddOrEven("12345"), "odd");
    });
})

describe('lookupChar', () => {
      it('should return undef', () => {
          assert.equal(lookupChar(34, 4), undefined);
      })
    it('should return undef', () => {
        assert.equal(lookupChar("word", "4"), undefined);
    })
    it('should return undef', () => {
        assert.equal(lookupChar("word", 2.3), undefined);
    })
    it('should return incorrect', () => {
        assert.equal(lookupChar("word", 4), "Incorrect index");
    })
    it('should return incorrect', () => {
        assert.equal(lookupChar("word", -4), "Incorrect index");
    })
    it('should return r', () => {
        assert.equal(lookupChar("word", 2), "r");
    })
})

describe('mathEnforcer', () => {
    it('should return undef', () => {
        assert.equal(mathEnforcer.addFive("5"), undefined)
    })
    it('should return num', () => {
        assert.closeTo(mathEnforcer.addFive(-2.3), 2.7, 0.01)
    })

    it('should return undef', () => {
        assert.equal(mathEnforcer.subtractTen("5"), undefined)
    })
    it('should return num', () => {
        assert.closeTo(mathEnforcer.subtractTen(-2.3), -12.3, 0.01)
    })

    it('should return undef', () => {
        assert.equal(mathEnforcer.sum("5", 4), undefined)
    })
    it('should return undef', () => {
        assert.equal(mathEnforcer.sum(5, "4"), undefined)
    })
    it('should return num', () => {
        assert.closeTo(mathEnforcer.sum(-2.1, -1.2), -3.3, 0.01)
    })
})