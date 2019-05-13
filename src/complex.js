

class Complex {
  constructor(real = 0, imaginary = 0) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    const re = this.real + complex.real;
    const im = this.imaginary + complex.imaginary;

    return new Complex(re, im);
  }

  subtract(complex) {
    const re = this.real - complex.real;
    const im = this.imaginary - complex.imaginary;

    return new Complex(re, im);
  }

  multiply(complex) {
    const re = this.real * complex.real - this.imaginary * complex.imaginary;
    const im = this.real * complex.imaginary - complex.real * this.imaginary;

    return new Complex(re, im);
  }

  multiplyScalar(n) {
    return new Complex(this.real * n, this.imaginary * n);
  }

  divide(complex) {
    const de = this.real * this.real + this.imaginary * this.imaginary;
    const re = (this.real * complex.real + this.imaginary * complex.imaginary) / de;
    const im = (this.real * complex.imaginary - complex.real * this.imaginary) / de;

    return new Complex(re, im);
  }

  divideScalar(n) {
    return new Complex(this.real / n, this.imaginary / n);
  }

  conjugate() {
    return new Complex(this.real, -this.imaginary);
  }

  exponent(n) {
    const arg = n * this.argument();
    const abs = this.absoluteValue() ** n;

    return new Complex(abs * Math.cos(arg), abs * Math.sin(arg));
  }

  argument() {
    return Math.atan2(this.imaginary, this.real);
  }

  absoluteValue() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  clone() {
    return new Complex(this.real, this.imaginary);
  }

  copy(complex) {
    this.real = complex.real;
    this.imaginary = complex.imaginary;
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }

}

export default Complex;
