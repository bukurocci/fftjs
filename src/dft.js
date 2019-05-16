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
      const c = samples[l].multiply(new Complex(Math.cos(exp), Math.sin(exp)));

      complex.real += c.real;
      complex.imaginary += c.imaginary;
    }

    coeffs.push(complex);
  }

  return coeffs;
};

export default dft;