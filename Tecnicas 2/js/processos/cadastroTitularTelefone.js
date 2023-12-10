"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const telefone_1 = __importDefault(require("../modelos/telefone"));
class CadastroTitularTelefone extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.execucao = true;
    }
    processar() {
        console.clear();
        console.log('Vamos cadastrar telefones:');
        console.log('****************************');
        while (this.execucao) {
            console.log('----------------------');
            console.log('| 1 - Cadastrar');
            console.log('| 0 - Finalizar');
            console.log('----------------------');
            this.opcao = this.entrada.receberNumero('| Escolha a opção desejada?');
            switch (this.opcao) {
                case 1:
                    console.log('Coletando os dados de telefone...');
                    let ddd = this.entrada.receberTexto('Qual o DDD?');
                    let numero = this.entrada.receberTexto('Qual o número?');
                    let novoTelefone = new telefone_1.default(ddd, numero);
                    this.cliente.Telefones.push(novoTelefone);
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
exports.default = CadastroTitularTelefone;
