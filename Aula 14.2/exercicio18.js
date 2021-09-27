function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        let x = Number(txt2.value)
        tab.innerHTML = ''
        while (c <= x) {
            let item = document.createElement('option')
            item.text = n  + 'x' + c + '=' + n*c
            tab.appendChild(item)
            c++
        }
    }
}