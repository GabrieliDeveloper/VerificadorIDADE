function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if (tano.value.length == 0 ) {
        window.alert('[ERRO] verifique os dados digitados e tente novamente!')
    } else  {
        var msex = window.document.getElementsByName('radsex')
        var idade = ano - Number(tano.value)
        var genero = ''

        if (msex[0].checked) { //Se o sexo masculino estiver marcado, ent...
            genero = 'Homem'
            if (idade >= 0 && idade <= 11) {
                img.setAttribute('src', 'bebe-f1.jpg')
            } else if (idade >= 20 && idade <= 50) {
                img.setAttribute('src', 'homem-m.jpg')
            } else if (idade >= 51) {
                img.setAttribute('src', 'senhor-m.jpg')
            } else if (idade >= 13 && idade <= 17) {
                img.setAttribute('src', 'ado.jpg')
            }
        } else if (msex[1].checked) { //Se o sexo feminino estiver marcado, ent...
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'B-F.jpg')
            } else if (idade >= 20 && idade <= 50) {
                img.setAttribute('src', 'M-F.jpg')
            } else if (idade >= 51) {
                img.setAttribute('src', 'senhora-f-f.jpg')
            } else if (idade >= 13 && idade <= 17) {
                img.setAttribute('src', 'ado-m.jpg')
            }
           
        }
        
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        

    }
        
    
        
    
}