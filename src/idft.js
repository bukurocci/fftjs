import Complex from "./complex";

const PI = Math.PI;
const PI2 = PI * 2;

const idft = (coeffs) => {

  const n = coeffs.length;

  const values = [];

  for(let l = 0; l < n; l++) {
    const complex = new Complex(0, 0);

    for (let k = 0; k < n; k++) {

      const exp = PI2 * k * l / n;
      const c = coeffs[k].multiply(new Complex(Math.cos(exp), Math.sin(exp)));

      complex.real += c.real;
      complex.imaginary += c.imaginary;
    }

    values.push(complex.divideScalar(n));
  }

  return values;
};

export default idft;