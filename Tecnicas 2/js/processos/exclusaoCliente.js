"use strict";
// ExcluirTitular.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ExcluirTitular extends processo_1.default {
    processar() {
        throw new Error("Method not implemented.");
    }
    static excluir() {
        const idTitular = this.entrada.receberNumero('Informe o ID do titular a ser excluído:');
        const indexTitular = armazem_1.default.InstanciaUnica.Clientes.findIndex(cliente => cliente.id === idTitular);
        if (indexTitular !== -1) {
            armazem_1.default.InstanciaUnica.Clientes.splice(indexTitular, 1);
            console.log(`Titular com ID ${idTitular} excluído com sucesso.`);
        }
        else {
            console.log(`Titular com ID ${idTitular} não encontrado.`);
        }
    }
}
exports.default = ExcluirTitular;
