"use strict";
// tipoCadastroCliente.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuTipoDeCadastroCliente_1 = __importDefault(require("../menus/menuTipoDeCadastroCliente"));
const cadastroDependente_1 = __importDefault(require("./cadastroDependente"));
const cadastroClienteTitular_1 = __importDefault(require("./cadastroClienteTitular"));
const cliente_1 = __importDefault(require("../modelos/cliente")); // Importe a classe Cliente
class TipoCadastroCliente extends processo_1.default {
    constructor() {
        super();
        this.menu = new menuTipoDeCadastroCliente_1.default();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new cadastroClienteTitular_1.default();
                this.processo.processar();
                break;
            case 2:
                // Crie um cliente fictício para passar como argumento
                const clienteFicticio = new cliente_1.default(0, '', '', new Date());
                this.processo = new cadastroDependente_1.default(clienteFicticio);
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
exports.default = TipoCadastroCliente;
