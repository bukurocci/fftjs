
const PI = Math.PI;

const idct = (coeffs) => {
  const n = coeffs.length;
  const invn = 1 / n;
  const invn2 = invn * 2;
  const values = [];

  for(let l = 0; l < n; l++) {
    const f0 = invn * coeffs[0];
    let rest = 0;

    for (let k = 1; k < n; k++) {
      const fk = coeffs[k];
      const angle = PI * k * (2 * l + 1) / (2 * n);

      rest += (fk * Math.cos(angle));
    }

    rest *= invn2;
    values.push(f0 + rest);
  }

  return values;
};


export default idct;