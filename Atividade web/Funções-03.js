function maiorEMenor(lista) {
    const maior = Math.max(...lista);
    const menor = Math.min(...lista);
    return { maior, menor };
}
console.log(maiorEMenor([10, 20, 30, 5])); 