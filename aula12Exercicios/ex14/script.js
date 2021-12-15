function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Hora atual: ${hora}h e ${minutos}min` 

    if(hora >= 0 && hora < 12){
        img.src = 'imgmanha.png'
        document.body.style.background = '#aeb9bf'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'imgtarde.png'
        document.body.style.background = '#f96c00'
    }
    else{
        img.src = 'imgnoite.png'
        document.body.style.background = '#453559'
    }
}