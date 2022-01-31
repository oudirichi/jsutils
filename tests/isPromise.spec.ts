import isPromise from '../src/isPromise';
import { expect } from 'chai';

describe('.isPromise', () => {
  context('when promise given', function() {
    it('should return true', function() {
      const prom = new Promise(() => {});
      expect(isPromise(prom)).to.be.true;
    });
  });

  context('when string given', function() {
    it('should return false', function() {
      expect(isPromise('')).to.be.false;
      expect(isPromise('abc')).to.be.false;
      expect(isPromise(String('abc'))).to.be.false;
    });
  });

  context('when boolean given', function() {
    it('should return false', function() {
      expect(isPromise(true)).to.be.false;
      expect(isPromise(false)).to.be.false;
      expect(isPromise(Boolean(1))).to.be.false;
    });
  });

  context('when number given', function() {
    it('should return false', function() {
      expect(isPromise(1)).to.be.false;
      expect(isPromise(-1)).to.be.false;
      expect(isPromise(NaN)).to.be.false;
      expect(isPromise(Number.MAX_SAFE_INTEGER)).to.be.false;
    });
  });

  context('when object given', function() {
    it('should return false', function() {
      expect(isPromise({})).to.be.false;
    });
  });

  context('when arrow function given', function() {
    it('should return false', function() {
      expect(isPromise(() => {})).to.be.false;
    });
  });

  context('when function given', function() {
    it('should return false', function() {
      expect(isPromise(function() {})).to.be.false;
    });
  });
});
