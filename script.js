const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc(){
    if(nome.value !== '' && altura.value !== '' && peso.value !== ''){
        const vlaorIMC = (peso.value / (altura.value*altura.value)).toFixed(1);
        
        if(vlaorIMC <= 18.5){
            resultado.textContent = `${nome.value}, você possui ${vlaorIMC} de IMC. Você está abaixo do indice`
        } else if(vlaorIMC > 18.5 && vlaorIMC <= 25){
            resultado.textContent = `${nome.value}, você possui ${vlaorIMC} de IMC. Você está no peso ideal.`
        }else if(vlaorIMC > 25 && vlaorIMC < 30){
            resultado.textContent = `${nome.value}, você possui ${vlaorIMC} de IMC. Você está levemente acima do peso.`
        }else{
            resultado.textContent = `${nome.value}, você possui ${vlaorIMC} de IMC. Você está acima do peso.`
        }

    }else{
        resultado.textContent = "Preencha todos os campos"
    }
}

calcular.addEventListener('click', imc)
