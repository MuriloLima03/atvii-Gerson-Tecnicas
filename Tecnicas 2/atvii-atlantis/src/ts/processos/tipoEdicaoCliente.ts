// tipoEdicaoCliente.ts

import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class TipoEdicaoCliente extends Processo {
    processar(): void {
        console.clear();
        console.log('Edição de Cliente');
        
        // Lógica para a edição do cliente
        // Você pode adicionar lógica para listar clientes e permitir a escolha do cliente a ser editado
        // ou pode receber o ID do cliente diretamente.

        // Exemplo de lógica para listar clientes e permitir a escolha:
        const clientes = Armazem.InstanciaUnica.Clientes;
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
