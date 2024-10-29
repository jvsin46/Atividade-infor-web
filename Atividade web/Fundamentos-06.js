function numeroMaisFrequente(arr) {
    const contagem = {};
    arr.forEach(num => contagem[num] = (contagem[num] || 0) + 1);
    return Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
}
console.log(numeroMaisFrequente([1, 2, 2, 3, 3, 3, 4])); 