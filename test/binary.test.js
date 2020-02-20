const { expect } = require('chai');
const { toBinary, toString } = require('../src/binary');

const { title } = require('./data');

describe('.toBinary', () => {
  it('should convert string to binary', () => {
    expect(toBinary(title.base)).to.equal(title.binary);
  });
});

describe('.toString', () => {
  it('should convert binary to string', () => {
    expect(toString(title.binary)).to.equal(title.base);
  });
});
