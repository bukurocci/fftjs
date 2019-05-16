import fft from './fft';

const ifft = (samples) => {
  return fft(samples.map(sample => sample.conjugate())).map(x => x.conjugate().divideScalar(samples.length));
};

export default ifft;