
const calcular = document.getElementById('calcular')


function imc( ){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value


    let imc, result
        

    if(nome !== undefined & altura !== undefined & peso !== undefined  ){

        imc = peso/(altura*altura)
         
         if(imc <18.5){
            result= ( nome + ", " +  " altura " + altura + ". Magro demais")
         }if(imc < 24.9){
            result= ( nome + ", " +  " altura " + altura + ". Normals")
         }if(imc <30){
            result= ( nome + ", " +  " altura " + altura + ". Obeso")
         }if(imc <34){
            result= ( nome + ", " +  " altura " + altura + ". Obesicade grau1")
         }
         
         
         else{
            result = 'vc deixou um campo vazio'
         }
    }

    return resultado.innerHTML = result
}

calcular.addEventListener('click', imc)