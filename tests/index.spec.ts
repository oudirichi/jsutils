// import { yes, no } from '../src/index';
import { expect } from 'chai';
import 'mocha';

import Utils from '../src/index';

describe('index', function() {
  describe('.uniq', function() {
    it('should be defined', function() {
      expect(typeof Utils.uniq).to.equal('function');
    });
  });
});
