// Escreva uma função que, dada uma string com letras e números, devolva a soma dos números presentes nessa string.

// Por exemplo,
// codigo = "asdja8por2mu1m1m1m7"
// pegaSoma(codigo)
// > 20

const getSum = string => {
  if (!string) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const number = parseInt(letter);
    if (isNaN(number)) {
      continue;
    } else {
      sum += number;
    }
  }

  return sum;
}

module.exports = getSum;
