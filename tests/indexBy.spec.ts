import indexBy from '../src/indexBy';
import { expect } from 'chai';
import 'mocha';

describe('.indexBy', () => {
  it('should return an object indexed by the given key', () => {
    expect(indexBy([{ key: 'pew' }, { key: 'mew' }], 'key')).to.deep.equal({ pew: { key: 'pew' }, mew: { key: 'mew' } });
  });

  context('when indexing by multiple', function() {
    const dataset = [
      {
          "user": 1,
          "skill": 1,
          "roles": [
              "Role_1",
              "Role_3"
          ]
      },
      {
          "user": 2,
          "skill": 1,
          "roles": [
              "Role_1",
              "Role_2"
          ]
      },
      {
          "user": 3,
          "skill": 2,
          "roles": [
              "Role_1"
          ]
      },
      {
          "user": 4,
          "skill": 2,
          "roles": [
              "Role_2"
          ]
      },
    ];

    it('should index properly', function() {
      const resp = indexBy(dataset, 'roles', function(item) { return 'user_' + item['user'];  });
      expect(resp).to.deep.equal({
        "Role_1": {
            "user_1": {
                "user": 1,
                "skill": 1,
                "roles": [
                    "Role_1",
                    "Role_3"
                ]
            },
            "user_2": {
                "user": 2,
                "skill": 1,
                "roles": [
                    "Role_1",
                    "Role_2"
                ]
            },
            "user_3": {
                "user": 3,
                "skill": 2,
                "roles": [
                    "Role_1"
                ]
            }
        },
        "Role_3": {
            "user_1": {
                "user": 1,
                "skill": 1,
                "roles": [
                    "Role_1",
                    "Role_3"
                ]
            },
            "user_2": {
                "user": 2,
                "skill": 1,
                "roles": [
                    "Role_1",
                    "Role_2"
                ]
            },
            "user_3": {
                "user": 3,
                "skill": 2,
                "roles": [
                    "Role_1"
                ]
            }
        },
        "Role_2": {
            "user_2": {
                "user": 2,
                "skill": 1,
                "roles": [
                    "Role_1",
                    "Role_2"
                ]
            },
            "user_4": {
                "user": 4,
                "skill": 2,
                "roles": [
                    "Role_2"
                ]
            }
        }
      });
    });
  });
});
