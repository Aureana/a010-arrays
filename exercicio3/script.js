const arrayNum = [2, 13, 26, 35, 41, 60];
const arrayString = ["batata", "alface", "queijo"];
const arrayBooleana = [13,"b", true];
//console.log(arrayNum)
//console.log(arrayString)
//console.log(arrayBooleana)

const copia1 = arrayNum.slice()  
console.log("Copia do arrayNum:",copia1)

const copia2 = arrayString.slice()  
console.log("Copia do arrayString:",copia2)

const copia3 = arrayBooleana.slice()  
console.log("Copia do arrayBooleana:",copia3)


copia1.push(9)
console.log("Original",arrayNum)
console.log(copia1)


copia2.pop()
console.log("Original",arrayString)
console.log("Excluir ultimo copia2:",copia2)

copia3.splice(1,1)
console.log("Original:",arrayBooleana)
console.log("Excluir segundo item copia3",copia3)
