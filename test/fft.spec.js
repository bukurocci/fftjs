import { Complex, fft } from '../src/';

describe('fft', () => {

  it('fft', () => {
    const samples = [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8].map(sample => new Complex(sample, 0));
    const actuals = fft(samples);
    const expecteds = [
      new Complex(3.5, 0),
      new Complex(-0.5, 1.207107),
      new Complex(-0.5, 0.5),
      new Complex(-0.5, 0.207107),
      new Complex(-0.5),
      new Complex(-0.5, -0.207107),
      new Complex(-0.5, -0.5),
      new Complex(-0.5, -1.207107),
    ];

    for(let i = 0, iz = samples.length; i < iz; i++) {
      assert.approximately(actuals[i].real, expecteds[i].real, 0.0001);
      assert.approximately(actuals[i].imaginary, expecteds[i].imaginary, 0.0001);
    }
  });
});


