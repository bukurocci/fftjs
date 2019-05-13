import { dct, idct } from '../src/';

const PI = Math.PI;

describe('idct', () => {

  before(() => {

  });

  after(() => {
  });

  it('idct', () => {
    const expecteds = [15 / 16 * PI, 13 / 16 * PI, 11 / 16 * PI, 9 / 16 * PI, 7 / 16 * PI, 5 / 16 * PI, 3 / 16 * PI, 1 / 16 * PI];
    const actuals = idct(dct(expecteds));

    for(let i = 0, iz = expecteds.length; i < iz; i++) {
      assert.approximately(actuals[i], expecteds[i], 0.0001);
    }
  });
});


