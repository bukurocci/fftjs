const PI = Math.PI;

const dct = (samples) => {
  const n = samples.length;
  const coeffs = [];

  for(let k = 0; k < n; k++) {
    let coeff = 0;

    for (let l = 0; l < n; l++) {
      const angle = PI * k * (2 * l + 1) / (2 * n);
      const fl = samples[l];

      coeff += (fl * Math.cos(angle));
    }
    coeffs.push(coeff);
  }

  return coeffs;
};


export default dct;