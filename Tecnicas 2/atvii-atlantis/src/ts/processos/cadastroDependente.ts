// cadastroDependente.ts

import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import Telefone from "../modelos/telefone";
import Endereco from "../modelos/endereco";
import Armazem from "../dominio/armazem";

export default class CadastroDependente extends Processo {
    private titular!: Cliente;

    public constructor(titular: Cliente) {
        super();
        this.titular = titular;
        this.execucao = true;
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo Dependente...');
        while (this.execucao) {
            let idTitular = this.entrada.receberNumero('Informe o ID do titular para que possamos efetuar este cadastro:');

            // Verificar se existe um titular com o ID fornecido
            const titularEncontrado = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.id === idTitular);

            if (titularEncontrado) {
                let nome = this.entrada.receberTexto('Qual o nome do novo Dependente?');
                let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo Dependente?');
                let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
                
                // Crie um novo dependente
                let idDependente = Armazem.InstanciaUnica.Id + 1;
                const dependente = new Cliente(idDependente, nome, nomeSocial, dataNascimento);

                // Configure o endereço do dependente igual ao do titular
                dependente.Endereco = titularEncontrado.Endereco.clonar() as Endereco;

                // Clone e adicione os telefones do titular para o dependente
                titularEncontrado.Telefones.forEach((telefone) => {
                    dependente.Telefones.push(telefone.clonar() as Telefone);
                });

                // Adicione o dependente à lista de dependentes do titular
                titularEncontrado.adicionarDependente(dependente);

                // Realize o cadastro de documentos do dependente
                this.processo = new CadastrarDocumentosCliente(dependente);
                this.processo.processar();

                console.log('Cadastro do dependente finalizado.');
                this.execucao = false; // Finalize o loop após o cadastro
            } else {
                console.log(`Titular com ID ${idTitular} não encontrado. Tente novamente.`);
            }
        }
    }
}
