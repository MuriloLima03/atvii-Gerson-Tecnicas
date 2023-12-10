"use strict";
// ExcluirDependente.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ExcluirDependente extends processo_1.default {
    processar() {
        throw new Error("Method not implemented.");
    }
    static excluir() {
        const idDependente = this.entrada.receberNumero('Informe o ID do dependente a ser excluído:');
        const indexDependente = armazem_1.default.InstanciaUnica.Clientes
            .flatMap(titular => titular.dependentes)
            .findIndex(dependente => dependente.id === idDependente);
        if (indexDependente !== -1) {
            // Remover dependente de seu titular
            const titular = armazem_1.default.InstanciaUnica.Clientes
                .find(titular => titular.dependentes.some(dependente => dependente.id === idDependente));
            if (titular) {
                titular.dependentes.splice(indexDependente, 1);
                console.log(`Dependente com ID ${idDependente} excluído com sucesso.`);
            }
            else {
                console.log('Titular não encontrado para o dependente.');
            }
        }
        else {
            console.log(`Dependente com ID ${idDependente} não encontrado.`);
        }
    }
}
exports.default = ExcluirDependente;
