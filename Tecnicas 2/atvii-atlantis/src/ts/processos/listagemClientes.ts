// listagemClientes.ts

import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";

export default class ListagemClientes {
    public static listar(): void {
        console.log('Listagem de Clientes:');
        Armazem.InstanciaUnica.Clientes.forEach((cliente) => {
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

    private static exibirInformacoesCliente(cliente: Cliente, isDependente: boolean = false): void {
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
