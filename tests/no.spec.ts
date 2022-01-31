import no from '../src/no';
import { expect } from 'chai';
import 'mocha';

describe('.no', () => {
  it('should return always true', () => {
    expect(no()).to.be.false;
  });
});
