const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]]
];

alunos.forEach(([nome, notas]) => {
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    console.log(`${nome}, média ${media.toFixed(2)}, ${media < 70 ? 'Reprovado' : 'Aprovado'}.`);
});