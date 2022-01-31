import indexBy from '../src/indexBy';
import { expect } from 'chai';
import 'mocha';

describe('.indexBy', () => {
  it('should return an object indexed by the given key', () => {
    expect(indexBy([{ key: 'pew' }, { key: 'mew' }], 'key')).to.deep.equal({ pew: { key: 'pew' }, mew: { key: 'mew' } });
  });
});
