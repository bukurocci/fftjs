import { dft, idft } from '../src/';

describe('idft', () => {

  before(() => {

  });

  after(() => {
  });

  it('idft', () => {
    const samples = [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8];
    const coeffs = dft(samples);
    const actuals = idft(coeffs);

    for(let i = 0, iz = samples.length; i < iz; i++) {
      assert.approximately(actuals[i].real, samples[i], 0.0001);
      assert.approximately(actuals[i].imaginary, 0, 0.0001);
    }
  });
});