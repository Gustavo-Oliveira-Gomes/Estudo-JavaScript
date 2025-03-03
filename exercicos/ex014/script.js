function carregar() {
    var msg = window.document.getElementById('msg')
    var igm = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora e Horas ${hora} : ${min}`

    if(hora >= 0 && hora < 12) {
        //Bom Bia!
        igm.src = 'img/manha.png'
        document.body.style.backgroundColor = '#668a90'
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        igm.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#ec9d75'
    }else{
        // Boa noite!
        igm.src = 'img/noite.png'
        document.body.style.backgroundColor = '#150a34'
    }
}   