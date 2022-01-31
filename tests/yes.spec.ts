import yes from '../src/yes';
import { expect } from 'chai';
import 'mocha';

describe('.yes', () => {
  it('should return always true', () => {
    expect(yes()).to.be.true;
  });
});
