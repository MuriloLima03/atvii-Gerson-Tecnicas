"use strict";
// SelecionarTipoExclusao.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const exclusaoDependente_1 = __importDefault(require("./exclusaoDependente"));
const exclusaoCliente_1 = __importDefault(require("./exclusaoCliente")); // Corrigir o nome da classe
class SelecionarTipoExclusao extends processo_1.default {
    processar() {
    }
    static selecionarTipo() {
        console.log('Escolha o tipo de exclusão:');
        console.log('1. Excluir Titular');
        console.log('2. Excluir Dependente');
        const opcao = this.entrada.receberNumero('Qual opção deseja?');
        switch (opcao) {
            case 1:
                exclusaoCliente_1.default.excluir(); // Corrigir a chamada do método
                break;
            case 2:
                exclusaoDependente_1.default.excluir();
                break;
            default:
                console.log('Opção não válida.');
        }
    }
}
exports.default = SelecionarTipoExclusao;
