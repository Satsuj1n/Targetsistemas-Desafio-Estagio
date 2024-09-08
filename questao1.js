function pertenceFibonacci(numero) {
  let a = 0,
    b = 1;
  if (numero === 0 || numero === 1) {
    return true;
  }
  while (b <= numero) {
    if (b === numero) {
      return true;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }
  return false;
}

// Exemplo
const numeroInformado = 324;
if (pertenceFibonacci(numeroInformado)) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
