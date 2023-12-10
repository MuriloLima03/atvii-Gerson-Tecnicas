"use strict";
// cadastroDependente.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const cliente_1 = __importDefault(require("../modelos/cliente"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class CadastroDependente extends processo_1.default {
    constructor(titular) {
        super();
        this.titular = titular;
        this.execucao = true;
    }
    processar() {
        console.log('Iniciando o cadastro de um novo Dependente...');
        while (this.execucao) {
            let idTitular = this.entrada.receberNumero('Informe o ID do titular para que possamos efetuar este cadastro:');
            // Verificar se existe um titular com o ID fornecido
            const titularEncontrado = armazem_1.default.InstanciaUnica.Clientes.find(cliente => cliente.id === idTitular);
            if (titularEncontrado) {
                let nome = this.entrada.receberTexto('Qual o nome do novo Dependente?');
                let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo Dependente?');
                let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
                // Crie um novo dependente
                let idDependente = armazem_1.default.InstanciaUnica.Id + 1;
                const dependente = new cliente_1.default(idDependente, nome, nomeSocial, dataNascimento);
                // Configure o endereço do dependente igual ao do titular
                dependente.Endereco = titularEncontrado.Endereco.clonar();
                // Clone e adicione os telefones do titular para o dependente
                titularEncontrado.Telefones.forEach((telefone) => {
                    dependente.Telefones.push(telefone.clonar());
                });
                // Adicione o dependente à lista de dependentes do titular
                titularEncontrado.adicionarDependente(dependente);
                // Realize o cadastro de documentos do dependente
                this.processo = new cadastrarDocumentosCliente_1.default(dependente);
                this.processo.processar();
                console.log('Cadastro do dependente finalizado.');
                this.execucao = false; // Finalize o loop após o cadastro
            }
            else {
                console.log(`Titular com ID ${idTitular} não encontrado. Tente novamente.`);
            }
        }
    }
}
exports.default = CadastroDependente;
