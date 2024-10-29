function maiorNumero(a, b) {
    return (a % 2 !== 0) ? a : (b % 2 !== 0) ? b : Math.max(a, b);
}
console.log(maiorNumero(4, 5)); 