import dct from '../src/dct';

const PI = Math.PI;

describe('dct', () => {

  before(() => {

  });

  after(() => {
  });

  it('dct', () => {
    const samples = [15 / 16 * PI, 13 / 16 * PI, 11 / 16 * PI, 9 / 16 * PI, 7 / 16 * PI, 5 / 16 * PI, 3 / 16 * PI, 1 / 16 * PI];
    const actuals = dct(samples);
    const expecteds = [ 2.51327412e+01,  1.01195773e+01,  3.39891166e-16,  1.05786033e+00, 0.00000000e+00,  3.15577543e-01, -8.20569863e-16, 7.96430224e-02].map(value => value * 0.5); // scipyで計算した数値だが、dct計算は2倍されている。 // https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.dct.html#scipy.fftpack.dct

    for(let i = 0, iz = samples.length; i < iz; i++) {
      assert.approximately(actuals[i], expecteds[i], 0.0001);
    }
  });
});


