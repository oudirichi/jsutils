const { expect } = require('chai');
import { charCode, unpack, pack } from '../src/string';

const { title } = require('./data');

describe('.charCode', () => {
  it('should convert to char code array', () => {
    expect(charCode(title.base)).to.deep.equal(title.charCode);
  });
});

describe('.unpack', () => {
  it('should convert to unpacked array', () => {
    expect(unpack(title.base)).to.deep.equal(title.unpacked);
  });
});

describe('.pack', () => {
  it('should convert unpacked array to base', () => {
    expect(pack(title.unpacked)).to.deep.equal(title.base);
  });
});
