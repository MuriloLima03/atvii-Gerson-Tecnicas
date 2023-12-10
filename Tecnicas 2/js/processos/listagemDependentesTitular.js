"use strict";
// ListagemDependentes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ListagemDependentes {
    static listar() {
        console.log('Listagem de Dependentes:');
        armazem_1.default.InstanciaUnica.Clientes.forEach((cliente) => {
            if (cliente.titular !== null) {
                this.exibirInformacoesCliente(cliente);
                console.log('------------------------');
            }
        });
    }
    static exibirInformacoesCliente(cliente) {
        console.log(`ID: ${cliente.id}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`Data de Nascimento: ${cliente.dataNascimento.toLocaleDateString()}`);
        console.log('Endereço:');
        console.log(`   ${cliente.endereco.toString()}`);
        console.log('Telefones:');
        cliente.telefones.forEach((telefone) => {
            console.log(`   ${telefone.toString()}`);
        });
    }
}
exports.default = ListagemDependentes;
