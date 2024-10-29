function modificaFrase(frase) {
    return frase.split(' ').map(palavra => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
    }).join(' ');
}
console.log(modificaFrase("Esta é uma frase de exemplo"));