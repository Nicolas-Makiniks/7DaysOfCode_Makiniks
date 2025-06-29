/*
Criar um sistema que ordene e categorize uma lista de compras do usuário
*/
const alimentos = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

let estadoAtual = 'inicio';

let alimentoDoUsuario;
let retornoResposta;

console.log('Início do script');
while(estadoAtual !== 'fim') {
    switch (estadoAtual) {
        case 'inicio':
            console.log('Primeira interação do usuário.');

            alert('Bem vindo ao seu organizador de compras de mercado pessoal!');
            alert('Aqui você irá listar tudo o que deseja comprar e iremos organizar automaticamente!');
            estadoAtual = 'coletaAlimento';
            break;
        
        case 'coletaAlimento':
            console.log('Realizando coleta de produtos do usuário.');

            alimentoDoUsuario = prompt('Qual alimento deseja adicionar?');
            retornoResposta = tratamentoDeRespostas(alimentoDoUsuario);

            if (!retornoResposta) {
                console.log('Usuário inseriu valor inválido');
                alert('Insira um valor válido.');
                break; //Força a repetir o laço/pergunta
            }

            console.log(`Valor inserido válido: ${alimentoDoUsuario}`);
            estadoAtual = 'coletaCategoria';
            break;
        
        case 'coletaCategoria':
            console.log('Definição da categoria do alimento.');
            const categoriaDoUsuario = prompt('Qual a categoria deste alimento? 1- frutas, 2- laticínios, 3- congelados, 4- doces');
            retornoResposta = tratamentoDeRespostas(categoriaDoUsuario);
            
            switch (retornoResposta) {
                case '1': // FRUTAS
                    console.log('Categoria definida como Frutas');
                    alimentos.frutas.push(alimentoDoUsuario.trim());
                    console.log(`Adicionado a categoria Frutas: ${alimentos.frutas}`);
                    estadoAtual = 'verificarSeAdicionaMais';
                    break;

                case '2': // LATICÍNIOS
                    console.log('Categoria definida como Frutas');
                    alimentos.laticinios.push(alimentoDoUsuario.trim());
                    console.log(`Adicionado a categoria Laticínios: ${alimentos.laticinios}`);
                    estadoAtual = 'verificarSeAdicionaMais';
                    break;

                case '3': // CONGELADOS
                    console.log('Categoria definida como Frutas');
                    alimentos.congelados.push(alimentoDoUsuario.trim());
                    console.log(`Adicionado a categoria Congelados: ${alimentos.congelados}`);
                    estadoAtual = 'verificarSeAdicionaMais';
                    break;

                case '4': // DOCES
                    console.log('Categoria definida como Frutas');
                    alimentos.doces.push(alimentoDoUsuario.trim());
                    console.log(`Adicionado a categoria Doces: ${alimentos.doces}`);
                    estadoAtual = 'verificarSeAdicionaMais';
                    break;
                
                default:
                    alert('Digite apenas um número!');
            }
            break;
            
        case 'verificarSeAdicionaMais':
            console.log('Verificar se o usuário deseja encerrar.');
            const respostaUsuario = prompt('Gostaria de adicionar mais itens a lista? 1- Sim, 2- Não');
            retornoResposta = tratamentoDeRespostas(respostaUsuario);

            switch (retornoResposta) {
                case '1':
                    console.log('Usuário deseja continuar');
                    estadoAtual = 'coletaAlimento'
                    break;

                case '2':
                    console.log('Usuário deseja encerrar');
                    estadoAtual = 'exibirListaFinal';
                    break;

                default:
                    console.log('Resposta inválida');
                    alert('Digite apenas um número!');
            }
            break;

        case 'exibirListaFinal':
            console.log(`A lista final organizada é:
                Frutas: ${alimentos.frutas}
                Laticínios: ${alimentos.laticinios}
                Congelados: ${alimentos.congelados}
                Doces: ${alimentos.doces}`);
            alert(`Sua lista final organizada é:
                Frutas: ${alimentos.frutas}
                Laticínios: ${alimentos.laticinios}
                Congelados: ${alimentos.congelados}
                Doces: ${alimentos.doces}`);
            estadoAtual = 'fim';
            break;
    }
}
console.log('Fim do script.');

// Abstração para tratamento de todas as respostas coletadas do usuário
function tratamentoDeRespostas(respostaDoUsuario) {
    if (!respostaDoUsuario || respostaDoUsuario.trim() === '') {
        console.log('Usuário não inseriu um valor');
        return;
    } else {
        console.log('Removendo espaços em branco da resposta coletada do usuário');
        return respostaDoUsuario.trim();
    }
}