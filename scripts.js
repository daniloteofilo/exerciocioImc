let nome = "Naiani";

let peso = 57;

let altura = 1.59;

let imc = peso / (altura**2);

function obesidade(){
    if (imc>= 25) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com sobrepeso.");
    }

    else if (imc <25 && imc >= 18) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está na faixa de peso ideal.");
    }

    else if (imc <18) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com o peso abaixo do ideal.");
    }
}

obesidade();