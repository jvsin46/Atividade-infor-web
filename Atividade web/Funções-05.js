function maiorPalavra(frase) {
    const palavras = frase.split(' '); 
    let maior = ''; 

    palavras.forEach(palavra => {
        if (palavra.length > maior.length) {
            maior = palavra; 
        }
    });

    return maior; 
}