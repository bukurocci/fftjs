import { Complex } from '../src/';

describe('complex', () => {

  before(() => {

  });

  after(() => {
  });

  it('multiply', () => {
    const a = new Complex(0, 1);
    const b = new Complex(0, 1);

    const res = a.multiply(b);

    assert.equal(res.real, -1);
    assert.equal(res.imaginary, 0);
  });
});


