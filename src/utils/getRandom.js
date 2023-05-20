export function generateRandom(minimum = 0, maximum = 10*10*1) {
  
  let diff = maximum - minimum;

  
  let randomsan = Math.random();

  
  randomsan = Math.floor(randomsan * diff);

  
  randomsan = randomsan + minimum;

  return randomsan;
}
