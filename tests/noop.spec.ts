import noop from '../src/noop';
import { expect } from 'chai';
import 'mocha';

describe('.noop', () => {
  it('should return always true', () => {
    expect(noop()).to.be.undefined;
  });
});
