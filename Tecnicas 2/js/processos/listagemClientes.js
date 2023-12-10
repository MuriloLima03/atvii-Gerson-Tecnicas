"use strict";
// listagemClientes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ListagemClientes {
    static listar() {
        console.log('Listagem de Clientes:');
        armazem_1.default.InstanciaUnica.Clientes.forEach((cliente) => {
            this.exibirInformacoesCliente(cliente);
            if (cliente.dependentes.length > 0) {
                console.log('Dependentes:');
                cliente.dependentes.forEach((dependente) => {
                    this.exibirInformacoesCliente(dependente, true);
                });
            }
            console.log('------------------------');
        });
    }
    static exibirInformacoesCliente(cliente, isDependente = false) {
        console.log(`ID: ${cliente.id}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`Data de Nascimento: ${cliente.dataNascimento.toLocaleDateString()}`);
        if (!isDependente) {
            console.log('Endereço:');
            console.log(`   ${cliente.endereco.toString()}`);
            console.log('Telefones:');
            cliente.telefones.forEach((telefone) => {
                console.log(`   ${telefone.toString()}`);
            });
        }
    }
}
exports.default = ListagemClientes;
