import { dft, idft } from '../src/';
import {Complex} from "../src";

describe('idft', () => {

  it('idft', () => {
    const samples = [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8].map(sample => new Complex(sample, 0));
    const coeffs = dft(samples);
    const actuals = idft(coeffs);

    for(let i = 0, iz = samples.length; i < iz; i++) {
      assert.approximately(actuals[i].real, samples[i].real, 0.0001);
      assert.approximately(actuals[i].imaginary, 0, 0.0001);
    }
  });
});