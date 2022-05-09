let nome = "Naiani";

let peso = 103;

let altura = 1.59;

let imc = peso / (altura**2);

function obesidade(){
    if (imc >= 40) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com obesidade de grau III.");
        }

    else if (imc >=35 && imc <40) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com obesidade de grau II.");
        }
    
    else if (imc >=30 && imc <35) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com obesidade de grau I.");
        }

    else if (imc>= 25 && imc <30) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com sobrepeso.");
    }

    else if (imc <25 && imc >= 18.5) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está na faixa de peso ideal.");
    }

    else if (imc <18.5) {
        document.write("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com o peso abaixo do ideal.");
    }

    
    }

obesidade();