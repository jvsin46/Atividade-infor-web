let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    } else {
        somaImpares += i;
    }
}
console.log(`Soma dos pares: ${somaPares}, Soma dos ímpares: ${somaImpares}`);