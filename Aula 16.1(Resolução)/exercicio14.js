let num = document.querySelector('input#num1')
let lista = document.querySelector('select#altab')
let res = document.querySelector('div#res')
let valores =[]
let n = Number(num1)

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }


}
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }


}

function add(){
    if(isNumero(num1.value) && !isLista(num1.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'O número ' + num.value + ' foi adicionado'
        altab.appendChild(item)

    
    } else {
        alert('Valor Inválido ou já adicionado')
    }

}
function fil() {
  

    if (valores.length == 0) {
        alert('Por favor verique os números')
    } else {
        
        let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
        soma += valores[pos] 
        if (valores[pos] > maior)
        maior = valores [pos]
        if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma/tot
    res.innerHTML= ''
res.innerHTML ='<p>Ao todo, foram adicionados ' + tot + ' números.</p>'
res.innerHTML += '<p>O maior valor informado foi ' + maior 
res.innerHTML += '<p> O Menor valor informado foi ' + menor
res.innerHTML += '<p> A soma de todos os números equivale a ' + soma
res.innerHTML += media

    }
}
