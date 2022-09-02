const arrayNum = [2, 13, 26, 35, 41, 60];
const arrayString = ["batata", "alface", "queijo"];
const arrayBooleana = [13,"b", true];
console.log(arrayNum)
console.log(arrayString)
console.log(arrayBooleana)


console.log("Quantidades de itens:",arrayNum.length)
console.log("Quantidades de itens:",arrayString.length)
console.log("Quantidades de itens:",arrayBooleana.length)

console.log("Primeiro item:",arrayNum[0])
console.log("Segundo item:",arrayString[1]) // 2º item 2º array
console.log("terceiro item:",arrayBooleana[2])  // 3º item 3º array

console.log(arrayNum.includes(26))
console.log(arrayBooleana.includes(7))




/*
# Exercício 2

Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array,
 e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
*/