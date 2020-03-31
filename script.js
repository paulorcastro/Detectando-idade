function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade<10) {
                //criança
                var tipo = 'Criança'
                img.setAttribute('src','foto-bebe-m.png')
            }else if (idade<21) {
                //jovem
                var tipo = 'Jovem'
                img.setAttribute('src','foto-jovem-m.png')

            }else if (idade<50) {
                //adulto
                var tipo = 'adulto'
                img.setAttribute('src','foto-adulto-m.png')

            }else{
                //idoso
                var tipo = 'idoso'
                img.setAttribute('src','foto-idoso-m.png')

            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade<10) {
                //criança
                var tipo = 'Criança'
                img.setAttribute('src','foto-crianca-f.png')
            }else if (idade<21) {
                //jovem
                var tipo = 'Jovem'
                img.setAttribute('src','foto-jovem-f.png')
            }else if (idade<50) {
                //adulto
                var tipo = 'Adulta'
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //idoso
                var tipo = 'Idosa'
                img.setAttribute('src','foto-idoso-f.png')
            }

        }

        res.style.textAling = 'center'
        res.innerHTML = ` Detectamos ${genero}, ${tipo} com ${idade} anos.`
        res.appendChild(img)
        
    }    
}
