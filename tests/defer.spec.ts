import defer from '../src/defer';
import { expect } from 'chai';
import 'mocha';

describe('.defer', () => {
  it('should return an object indexed by the given key', async() => {
    const deferred = defer<number>();

    deferred.resolve(1);

    const result = await deferred.promise;
    expect(result).to.equal(1);

  });
});
