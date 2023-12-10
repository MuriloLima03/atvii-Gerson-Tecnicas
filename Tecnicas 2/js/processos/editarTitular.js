"use strict";
// EditarTitular.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const cadastroEnderecoTitular_1 = __importDefault(require("./cadastroEnderecoTitular"));
const cadastroTitularTelefone_1 = __importDefault(require("./cadastroTitularTelefone"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
class EditarTitular extends processo_1.default {
    constructor(titular) {
        super();
        this.titular = titular;
    }
    processar() {
        console.log(`Editando informações do titular ${this.titular.id} - ${this.titular.nome}...`);
        // Permitindo a edição de todas as informações do titular
        this.titular.nome = this.entrada.receberTexto('Novo nome do titular:');
        this.titular.nomeSocial = this.entrada.receberTexto('Novo nome social do titular:');
        this.titular.dataNascimento = this.entrada.receberData('Nova data de nascimento do titular:');
        // Chamar outros processos necessários
        const editarEndereco = new cadastroEnderecoTitular_1.default(this.titular);
        editarEndereco.processar();
        const editarTelefones = new cadastroTitularTelefone_1.default(this.titular);
        editarTelefones.processar();
        const cadastrarDocumentos = new cadastrarDocumentosCliente_1.default(this.titular);
        cadastrarDocumentos.processar();
        // Atualizar o titular no armazém
        const index = armazem_1.default.InstanciaUnica.Clientes.findIndex(c => c.id === this.titular.id);
        if (index !== -1) {
            armazem_1.default.InstanciaUnica.Clientes[index] = this.titular;
            console.log('Edição concluída. Titular atualizado.');
        }
        else {
            console.log('Erro ao atualizar o titular no armazém.');
        }
    }
}
exports.default = EditarTitular;
