function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não eh permidido dividir por zero";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        const operacao = prompt("Escolha a operação: soma, subtracao, multiplicacao, divisao, sair");

        if (operacao === 'sair') {
            alert("Até a próxima");
            break;//termina a execucao do codigo sem entra no switch
        }

        let a = parseFloat(prompt("Digite o primeiro número:")); //converte a string digita em numero flutuante
        let b = parseFloat(prompt("Digite o segundo número:")); //converte a string digita em numero flutuante
        let resultado;

        switch (operacao) {
            case 'soma':
                resultado = soma(a, b);
                break;
            case 'subtracao':
                resultado = subtracao(a, b);
                break;
            case 'multiplicacao':
                resultado = multiplicacao(a, b);
                break;
            case 'divisao':
                resultado = divisao(a, b);
                break;
            default:
                alert("Operação inválida. Tente novamente.");
                continue;
        }

        alert(`O resultado da ${operacao} é: ${resultado}`);
    }
}

calculadora();
