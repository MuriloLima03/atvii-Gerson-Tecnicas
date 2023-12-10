// ListagemDependentes.ts

import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";

export default class ListagemDependentes {
    public static listar(): void {
        console.log('Listagem de Dependentes:');
        Armazem.InstanciaUnica.Clientes.forEach((cliente) => {
            if (cliente.titular !== null) {
                this.exibirInformacoesCliente(cliente);
                console.log('------------------------');
            }
        });
    }

    private static exibirInformacoesCliente(cliente: Cliente): void {
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
