function somaTamanhos(frase) {
    return frase.split(' ').reduce((soma, palavra) => soma + palavra.length, 0);
}
console.log(somaTamanhos("Esta é uma frase"));