function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuntos = data.getMinutes()
    msg.innerHTML = "Agora São " + hora + " Horas e " + minuntos + " minuntos" 
    if (hora >= 0 && hora <12) {
        img.src= "modelo/manha.png" 
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora<= 18) {
    img.src = "modelo/tarde.png"
} else {
    img.src = "modelo/noite.png"
}
}