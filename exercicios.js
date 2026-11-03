//exercicio 1

// let personagem = {nome: "arya", classe: "maga", nivel : 12,vida:85, força:20}
// console.log(`nome: ${personagem.nome}`);
// console.log(`classe: ${personagem.classe}`);
// console.log(`nivel: ${personagem.nivel}`);
// console.log(`força: ${personagem.força}`);
// console.log(`vida: ${personagem.vida}`);



// //exercicio 2 
// let carro = {marca: "toyota", modelo: "corola", ano : 2026 ,cor:"prata", preço:2000000}
// console.log(`marca: ${carro.marca}`);
// console.log(`modelo: ${carro.modelo}`);
// console.log(`ano: ${carro.ano}`);
// console.log(`cor: ${carro.cor}`);
// console.log(`preço: ${carro.preço}`);

// //exercicio
// let produto = {
//     nome: "Teclado",
//     preco: 120,
//     estoque: 15
// };
// produto.preco = 100;
// produto.estoque = 20;

// console.log(produto);

// //exercicio 4

// let filme = {
//     titulo: "Interestelar",
//     ano: 2014,
//     diretor:"marques",
//     genero:"ficçao",
//     nota:9,
// };

// console.log(`filme: ${filme.nome}`);
// console.log(`titulo: ${filme.titulo}`);
// console.log(`ano: ${filme.ano}`);
// console.log(`diretor: ${filme.diretor}`);
// console.log(`genero: ${filme.genero}`);
// console.log(`nota: ${filme.nota}`);


// //exercicio 5

// let animal = {
//     nome: "cris",
//     especie: "Cachorro",
//     idade: 2,
//     peso: 18,
//     vacinado: true
// };

// if (animal.vacinado) {
//     console.log("O animal está vacinado.");
// } else {
//     console.log("O animal não está vacinado.");
// }


//exercicio 6 
// let aluno = {
//     nome: "Mariana",
//     nota1: 8,
//     nota2: 6
// };

// let media = (aluno.nota1 + aluno.nota2) / 2;

// if (media >= 7) {
//     console.log(aluno.nome + " foi aprovada");
// } else {
//     console.log(aluno.nome + " foi reprovada");
// }

// console.log("media: " + media);


//exercicio 7
// let produto = { nome: "Monitor", preco: 900, desconto: 15 };

// console.log(`desconto: R$ ${(produto.preco * produto.desconto) / 100} 
// final: R$ ${produto.preco - (produto.preco * produto.desconto) / 100}`);


// //exercicio 8
// let personagem = {
//     nome: "Guerreiro",
//     vida: 100,
//     ataque: 25,
//     defesa: 10
// };
// let danoRecebido = 30 - personagem.defesa;
// personagem.vida -= danoRecebido; 
// console.log(personagem);

// //exercicio 9
// let conta = {
//     titular: "Ana",
//     saldo: 1500,
//     valorSaque: 200
// };



// //exercicio 10
// let atleta = {
//     nome: "Carlos",
//     idade: 19,
//     altura: 1.85,
//     pontos: 120
// };
// if (atleta.pontos < 50) {
//     console.log("iniciante");
// } else if (atleta.pontos <= 99) {
//     console.log("intermediário");
// } else {
//     console.log("avançado");
// }

// //exercicio 11
// let alunos = [
//     { nome: "thomas", idade: 16 },
//     { nome: "bersi", idade: 17 },
//     { nome: "leo", idade: 17 },
//     { nome: "arthur baia", idade: 16 }
// ];

// for (let i = 0; i < alunos.length; i++) {
//     console.log("Nome: " + alunos[i].nome);
//     console.log("Idade: " + alunos[i].idade);
// }

//exercicio 12
// let alunosnotas = [ 
//   { nome: "thomas", nota: 8 }, 
//   { nome: "bersi", nota: 5 }, 
//   { nome: "leo", nota: 9 }, 
//   { nome: "arthur baia", nota: 7 }, 
//   { nome: "isabela", nota: 4 } 
// ]; 
// let aprovados = 0; 
// for (let i = 0; i < alunosnotas.length; i++) { 
//   if (alunosnotas[i].nota >= 7) { 
//     aprovados++; 
//   } 
// } 

// console.log("total de aprovados: " + aprovados);

// exercicio 13
// let produtos = [
//     { nome: "mouse", preco: 50, quantidade: 10 },
//     { nome: "teclado", preco: 120, quantidade: 5 },
//     { nome: "monitor", preco: 900, quantidade: 3 }
// ];
// let total = 0;
// for (let i = 0; i < produtos.length; i++) {
//     total += produtos[i].preco * produtos[i].quantidade;
// }
// console.log("valor total do estoque:" + total);

// exercicio 14
// let jogadores = [
//     { nome: "Lucas", pontos: 150 },
//     { nome: "Mariana", pontos: 230 },
//     { nome: "Carlos", pontos: 180 },
//     { nome: "Ana", pontos: 310 }
// ];
// let maiorpontuacao = jogadores[0]; 
// for (let i = 1; i < jogadores.length; i++) {
//     if (jogadores[i].pontos > maiorpontuacao.pontos) {
//         maiorpontuacao = jogadores[i];
//     }
// }  console.log("jogador com maior pontuaçao: " + maiorpontuacao.nome);
//    console.log("pontuaçao: " + maiorpontuacao.pontos);