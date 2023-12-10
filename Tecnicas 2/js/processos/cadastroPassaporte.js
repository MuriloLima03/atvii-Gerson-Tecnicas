"use strict";
// cadastroPassaporte.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const TipoDocumento_1 = require("../enumeracoes/TipoDocumento");
const documento_1 = __importDefault(require("../modelos/documento"));
class CadastroPassaporte extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
    }
    processar() {
        let numero = this.entrada.receberTexto('Qual o número do passaporte?');
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do passaporte?');
        let passaporte = new documento_1.default(numero, TipoDocumento_1.TipoDocumento.Passaporte, dataExpedicao);
        this.cliente.Documentos.push(passaporte);
    }
}
exports.default = CadastroPassaporte;
