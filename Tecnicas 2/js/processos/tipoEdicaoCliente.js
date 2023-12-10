"use strict";
// tipoEdicaoCliente.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class TipoEdicaoCliente extends processo_1.default {
    processar() {
        console.clear();
        console.log('Edição de Cliente');
        // Lógica para a edição do cliente
        // Você pode adicionar lógica para listar clientes e permitir a escolha do cliente a ser editado
        // ou pode receber o ID do cliente diretamente.
        // Exemplo de lógica para listar clientes e permitir a escolha:
        const clientes = armazem_1.default.InstanciaUnica.Clientes;
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.Nome}`);
        });
        const clienteSelecionado = this.entrada.receberNumero('Selecione o cliente a ser editado:');
        const cliente = clientes[clienteSelecionado - 1];
        // Lógica para a edição do cliente, por exemplo:
        const novoNome = this.entrada.receberTexto('Novo nome do cliente:');
        cliente.editarCliente(novoNome, cliente.NomeSocial, cliente.DataNascimento);
        console.log('Cliente editado com sucesso!');
    }
}
exports.default = TipoEdicaoCliente;
