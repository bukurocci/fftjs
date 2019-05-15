
const reverseBit = (number, bit) => {
  let reversed = 0;

  for(let i = 0; i < bit; i++) {
    reversed <<= 1;
    reversed += ((number >> i) & 1);
  }

  return reversed;
};

export default reverseBit;