import Complex from "./complex";

const PI = Math.PI;
const PI2 = PI * 2;

const dft = (samples) => {

  const n = samples.length;
  const coeffs = [];

  for(let k = 0; k < n; k++) {
    const complex = new Complex(0, 0);

    for (let l = 0; l < n; l++) {

      const exp = -PI2 * k * l / n;
      const re = samples[l] * Math.cos(exp);
      const im = samples[l] * Math.sin(exp);

      complex.real += re;
      complex.imaginary += im;
    }

    coeffs.push(complex);
  }

  return coeffs;
};

export default dft;