import { Complex } from '../src/';

describe('complex', () => {

  it('add', () => {
    const a = new Complex(3, 2);
    const b = new Complex(5, -6);

    const res = a.add(b);

    assert.equal(res.real, 8);
    assert.equal(res.imaginary, -4);
  });

  it('subtract', () => {
    const a = new Complex(3, 2);
    const b = new Complex(5, -6);

    const res = a.subtract(b);

    assert.equal(res.real, -2);
    assert.equal(res.imaginary, 8);
  });

  it('multiply', () => {
    const a = new Complex(0, 1);
    const b = new Complex(0, 1);

    const res = a.multiply(b);

    assert.equal(res.real, -1);
    assert.equal(res.imaginary, 0);
  });
});


