function detectar_dados(){
    var data = new Date
    ano = data.getFullYear()
    var ano_nascimento = window.document.getElementById('ano_nascimento')
    var res = window.document.getElementById('avaliador')

     if (ano_nascimento.value.length == 0 || ano_nascimento.value > ano){
         window.alert('ERRO, verifique os dados e tente dnv')
     }

     else{
         console.log(ano_nascimento)
         var radsex = window.document.getElementsByName('radsex')
         var idade = ano - Number(ano_nascimento.value) 
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id','foto')

         if (radsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <= 14)
               img.setAttribute('src','foto-bebe-m.png')

            else if (idade >14 && idade <= 18){
               img.setAttribute('src' , 'foto-jovem-m.png')
            }

            else if (idade > 14 && idade <=50){
               img.setAttribute('src', 'foto-adulto-m.png')
            }

            else{
               img.setAttribute('src' , 'foto-idoso-m.png')
            }
         }

         else{
            genero = 'mulher'
            if (idade >=0 && idade <= 14)
               img.setAttribute('src','foto-bebe-f.png')

            else if (idade >14 && idade <= 18){
               img.setAttribute('src' , 'foto-jovem-f.png')
            }

            else if (idade > 14 && idade <=50){
               img.setAttribute('src', 'foto-adulto-f.png')
            }

            else{
               img.setAttribute('src' , 'foto-idoso-f.png')
            }
         }

         avaliador.innerHTML = `Detectamos ${genero} de ${idade} anos`
         avaliador.appendChild(img)
      }
   }