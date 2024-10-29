const agora = new Date();
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const diaDaSemana = diasDaSemana[agora.getDay()];
const horaAtual = agora.toTimeString().split(" ")[0]; 
console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);