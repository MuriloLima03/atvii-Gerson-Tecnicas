"use strict";
// TipoListagemClientes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const listagemClientes_1 = __importDefault(require("./listagemClientes"));
const listagemTitulares_1 = __importDefault(require("./listagemTitulares"));
const listagemDependentesTitular_1 = __importDefault(require("./listagemDependentesTitular"));
const menuTipoDeListagemClientes_1 = __importDefault(require("../menus/menuTipoDeListagemClientes"));
class TipoListagemClientes extends processo_1.default {
    constructor() {
        super();
        this.menu = new menuTipoDeListagemClientes_1.default();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                listagemClientes_1.default.listar();
                break;
            case 2:
                listagemTitulares_1.default.listar();
                break;
            case 3:
                listagemDependentesTitular_1.default.listar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
exports.default = TipoListagemClientes;
