function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0|| fano.value >ano) {
       window.alert('Verique os dados e tente novamente')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 20){
               //jovem
               img.setAttribute('src', 'youngmen.png')
           } else if (idade >20 && idade <50) {
               //adulto
               img.setAttribute('src', 'adultmen.png')
           } else if (idade >50) {
               //idoso
               img.setAttribute('src', 'seniormen.png')
           } 
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 20){
                //jovem
                img.setAttribute('src', 'youngwoman.png')
            } else if (idade >20 && idade <50) {
                //adulto
                img.setAttribute('src', 'adultwoman.png')
            } else if (idade >50) {
                //idoso
                img.setAttribute('src', 'seniorwoman.png')
            }
           
        }
       res.style.textAlign = 'center'
       res.innerHTML = 'Detectamos ' + gênero + ' com '  + idade + ' anos'
       res.appendChild(img)
}
}