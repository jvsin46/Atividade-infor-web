function contarVogaisEConsoantes(frase) {
    const vogais = 'aeiouAEIOU';
    let contadorVogais = 0;
    let contadorConsoantes = 0;

    for (const char of frase) {
        if (char.match(/[a-zA-Z]/)) {
            if (vogais.includes(char)) {
                contadorVogais++;
            } else {
                contadorConsoantes++;
            }
        }
    }
    return { vogais: contadorVogais, consoantes: contadorConsoantes };
}
console.log(contarVogaisEConsoantes("Esta é uma frase"));