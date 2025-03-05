function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('textano')
    var res = window.document.querySelector('div#res')


    if( fano.value.length == 0 || fano.value > ano )// length e para contar quantos caracteres possui  
       {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }else {
        var sex = document.getElementsByName('sex')
        var idade = ano - fano.value
        var genero = `` 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked)// checked valor da caixa de valores chekedbox
        {
            genero = `Homem`

            if (idade >= 0 && idade < 10){
                img.attributes( 'src', 'img/m-crianca.png')
            }else if ( idade < 21){
                img.attributes( 'src', 'img/m-jovem.png')
            }else if ( idade < 50){
                img.attributes( 'src', 'img/m-adulto.png')
            }else{
                img.attributes( 'src', 'img/m-idoso.png')
            }

        }else if(sex[1].checked){
            genero = `Mulher`

            if (idade >= 0 && idade < 10){
                img.attributes( 'src', 'img/f-crianca.png')
            }else if ( idade < 21){
                img.attributes( 'src', 'img/f-jovem.png')
            }else if ( idade < 50){
                img.attributes( 'src', 'img/f-adulto.png')
            }else{
                img.attributes( 'src', 'img/f-idoso.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //  Cria um novo elemento e adiciona-o ao final do documento
    }

    /**var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('msg')
    var igm = window.document.getElementById('img')*/


    // ` para usar a concatenação
}