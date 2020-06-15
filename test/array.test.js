const { expect } = require('chai');
const { left, intersect, uniq, concat, range } = require('../src/array');

describe('.left', () => {
  it('should return only first array elements that are not on another array', () => {
    expect(left([1, 2, 3], [2], [3])).to.deep.equal([1]);
  });
});

describe('.intersect', () => {
  it('should return element in intersection of all arrays', () => {
    expect(intersect([1, 2, 3], [2], [2, 3])).to.deep.equal([2]);
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

describe('.range', () => {
  it('should allow to create array from result', () => {
    expect(Array.from(range(5, 10))).to.deep.equal([5, 6, 7, 8, 9, 10]);
  });

  it('should allow to iterate', () => {
    expect(typeof range(5, 10).forEach).to.not.be.undefined;
  });
});
