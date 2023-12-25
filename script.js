function calcular() {
    const peso = parseFloat(document.getElementById('pesoInput').value);
    const altura = parseFloat(document.getElementById('alturaInput').value);
    const imc = calcularImc(peso, altura)
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    const classificacao = classificarImc(imc);
    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
}

function calcularImc(peso, altura) {
    return peso / (altura * altura)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal"
    } else if (imc >= 25 && imc < 30) {
        return "Acima do Peso"
    } else if (imc >= 30 && imc < 40) {
        return "Obeso"
    } else {
        return "Obesidade grave"
    }
}