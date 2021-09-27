let valores = [8, 1, 7, 4, 2, 9]
let num=[1, 2 , 3, 4 , 5 , 6, 9, 10]
let pos=num.indexOf(10)
if (pos<=-1) {
    console.log('O valor não foi encontrado')
}
num [6]=7
num.push(9)
num.sort()
console.log(num)
console.log(num.length)
console.log('O primeiro valor do vetor é ' + num[8])
console.log('O valor 8 está na posição ' + pos)



for (let pos = 0; pos<valores.length; pos++) {
    console.log('A posição ' + pos + ' Tem o valor ' + valores[pos])
}

for (let pos in valores) {
    console.log('01')
}