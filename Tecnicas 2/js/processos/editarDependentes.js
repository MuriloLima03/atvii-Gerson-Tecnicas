"use strict";
// EditarDependente.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
class EditarDependente extends processo_1.default {
    constructor(dependente) {
        super();
        this.dependente = dependente;
    }
    processar() {
        console.log(`Editando informações do dependente ${this.dependente.id} - ${this.dependente.nome}...`);
        // Permitindo a edição do nome e nome social
        this.dependente.nome = this.entrada.receberTexto('Novo nome do dependente:');
        this.dependente.nomeSocial = this.entrada.receberTexto('Novo nome social do dependente:');
        // Chamando o processo para cadastrar/editar documentos
        const cadastrarDocumentos = new cadastrarDocumentosCliente_1.default(this.dependente);
        cadastrarDocumentos.processar();
        console.log('Edição concluída. Dependente atualizado.');
    }
}
exports.default = EditarDependente;
