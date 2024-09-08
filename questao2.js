function contarOcorrenciasA(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      contador++;
    }
  }
  return contador;
}

// Exemplo
const stringEntrada = "A abelha abelhuda";
const numeroDeAs = contarOcorrenciasA(stringEntrada);
if (numeroDeAs > 0) {
  console.log(`A letra 'a' aparece ${numeroDeAs} vezes na string.`);
} else {
  console.log(`A letra 'a' não aparece na string.`);
}
