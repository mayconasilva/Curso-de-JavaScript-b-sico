function somar() {
    let a1 = document.getElementById('inicio')
    let a2  = document.getElementById('fim')
    let a3 = document.getElementById('passo')
    let res = document.querySelector('div#res')

    if (a1.value.length == 0 || a2.value.length == 0 || a3.value.length == 0) {
        alert('[ERROR] Verique os dados')
    } else {
        let i = Number(a1.value)
        let f = Number(a2.value)
        let p = Number(a3.value)
        if (1 < f) {
            for(let c=i; c<= f; c += p) {
                res.innerHTML += c
            }

            }else {
                for(let c= i; c>f; c-= p) {
                    res.innerHTML += c
                }

            }
        }

     }