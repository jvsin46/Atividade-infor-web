function formatarNome(nomeCompleto) {
    const partes = nomeCompleto.split(' ');
    const sobrenome = partes.pop();
    const iniciais = partes.map(p => p[0].toUpperCase()).join('. ');
    return `${iniciais}. ${sobrenome}`;
}
console.log(formatarNome("Alan Mathison Turing")); 