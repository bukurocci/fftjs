import { Complex, fft, ifft } from '../src/';

describe('ifft', () => {

  it('ifft', () => {
    const expecteds = [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8].map(sample => new Complex(sample, 0));
    const actuals = ifft(fft(expecteds));

    for(let i = 0, iz = expecteds.length; i < iz; i++) {
      assert.approximately(actuals[i].real, expecteds[i].real, 0.0001);
      assert.approximately(actuals[i].imaginary, expecteds[i].imaginary, 0.0001);
    }
  });
});


