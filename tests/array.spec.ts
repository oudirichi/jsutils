import { difference, intersection, uniq, concat } from '../src/array';
import { expect } from 'chai';
import 'mocha';

describe('.difference', () => {
  it('should return only first array elements that are not on another array', () => {
    expect(difference([1, 2, 3], [2], [3])).to.deep.equal([1]);
  });

  context('When only one array given', () => {
    it('should return first array', () => {
      expect(difference([1])).to.deep.equal([1]);
    });
  });
});

describe('.intersection', () => {
  it('should return element in intersectionion of all arrays', () => {
    expect(intersection([1, 2, 3], [2], [2, 3])).to.deep.equal([2]);
  });
});

describe('.concat', () => {
  it('should concat all given array and return uniq elements', () => {
    expect(concat([1, 2, 3], [2], [2, 3])).to.deep.equal([1, 2, 3]);
  });
});

describe('.uniq', () => {
  it('should concat all given array and return uniq elements', () => {
    expect(uniq([1, 1, 2, 2, 3, 3])).to.deep.equal([1, 2, 3]);
  });
});
