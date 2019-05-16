import Complex from './complex';

const PI = Math.PI;
const PI2 = PI * 2;

const computeFFT = (samples) => {
  const n = samples.length;

  // サンプルが1つの場合、そのまま返す
  if(n === 1) {
    return samples;
  }

  const buffer = samples;
  const parts = samples.reduce((acc, cur, index) => {
    acc[index % 2].push(cur);
    return acc;
  }, [[], []]);

  const even = computeFFT(parts[0]);
  const odd = computeFFT(parts[1]);

  for(let k = 0, kz = n / 2; k < kz; k++) {
    const p = even[k];
    const q = odd[k];
    const wk = -PI2 * k / n;
    const twiddle = new Complex(Math.cos(wk), Math.sin(wk));

    buffer[k] = p.add(q.multiply(twiddle));
    buffer[k + kz] = p.subtract(q.multiply(twiddle));
  }

  return buffer;
};

const fft = (samples) => {
  const n = samples.length;

  // FFTの条件である2のべき乗であるかどうかをチェック
  if((n & (n-1))) {
    throw new Error('サンプル数が2のべき乗ではありません');
  }

  return computeFFT(samples.slice());
};

export default fft;