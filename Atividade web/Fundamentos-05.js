function verificaIntervalo(num1, num2, num3) {
    const intervalo = [num1, num2, num3].every(num => num >= 50 && num <= 99);
    console.log(intervalo ? "Sucesso!" : "Erro: Um ou mais números estão fora do intervalo.");
}
verificaIntervalo(60, 70, 80);