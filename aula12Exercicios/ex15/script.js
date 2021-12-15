var nasc = window.document.getElementById('ano') //ano nascimento
var data = new Date()   //data atual
var anoAtual = data.getFullYear() //ano atual
var sexo = window.document.getElementsByName('sexo') //sexo escolhido
var resu = window.document.getElementById('resu') //resultado que aparece na pag
var img = window.document.createElement('img') //cria a tag img
img.setAttribute('id', 'imagem') //coloca atributo na tag = <img id="imagem" src="">

function verificar(){
    if(nasc.value.length == 0 || nasc.value > anoAtual || nasc.value < 1900){ //verifica se não é um ano inválido
        window.alert('[ERRO] Verifique os dados corretamente!')
    }
    else{
        var idade = anoAtual - Number(nasc.value) //calcula a idade
        var genero = '' //vai armazenar o genero coletado

        if(sexo[0].checked){ //se a checkbox selecionada for masc
            genero = 'Masculino'
            if(idade >= 0 && idade <= 12){ //criança
                img.setAttribute('src', 'img-kid-masc.png')
            }
            else if(idade > 12 && idade < 18){ //adolecente
                img.setAttribute('src', 'img-teen-masc.png')
            }
            else if(idade >= 18 && idade < 60){ //adulto
                img.setAttribute('src', 'img-adulto-masc.png')
            }
            else if(idade >= 60){ //idoso
                img.setAttribute('src', 'img-idoso-masc.png')
            }
        }
        else{ //se a checkbox for fem
            genero = 'Feminino'
            if(idade >= 0 && idade <= 12){ //criança
                img.setAttribute('src', 'img-kid-fem.png')
            }
            else if(idade > 12 && idade < 18){ //adolecente
                img.setAttribute('src', 'img-teen-fem.png')
            }
            else if(idade >= 18 && idade < 60){ //adulto
                img.setAttribute('src', 'img-adulto-fem.png')
            }
            else if(idade >= 60){ //idoso
                img.setAttribute('src', 'img-idoso-fem.png')
            }
        }

        resu.style.textAlign = 'center' //alinha a div#resu no centro
        resu.innerHTML = `<p>Genero ${genero} com ${idade} anos</p>` //substitui a tag <p>
        resu.appendChild(img) //adiciona a img na tela
    }
}