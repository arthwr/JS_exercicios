let num = [1,2,3,4,5,6,7,8,9,10]
//variavel.length -> retorna quantidade de 'indices' que o vetor tem
for (let i=0; i<num.length; i++){
    console.log(`A posição ${i}, tem o valor ${num[i]}`)
}
console.log("Outra forma de imprimir o array :)")
for (let i in num ){
    console.log(`A posição ${i}, tem o valor ${num[i]}`)
}  