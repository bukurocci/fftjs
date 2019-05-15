import { reversebit } from '../src/';

describe('reversebit', () => {

  before(() => {
  });

  after(() => {
  });

  it('reversebit', () => {
    assert.equal(reversebit(1, 4), 8);
    assert.equal(reversebit(4, 3), 1);
    assert.equal(reversebit(8, 4), 1);
    assert.equal(reversebit(7, 3), 7);
    assert.equal(reversebit(16, 5), 1);
    assert.equal(reversebit(31, 5), 31);
    assert.equal(reversebit(5, 3), 5);
  });
});