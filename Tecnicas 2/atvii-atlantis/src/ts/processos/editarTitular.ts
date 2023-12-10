// EditarTitular.ts

import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTitularTelefone from "./cadastroTitularTelefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class EditarTitular extends Processo {
    private titular: Cliente;

    constructor(titular: Cliente) {
        super();
        this.titular = titular;
    }

    processar(): void {
        console.log(`Editando informações do titular ${this.titular.id} - ${this.titular.nome}...`);

        // Permitindo a edição de todas as informações do titular
        this.titular.nome = this.entrada.receberTexto('Novo nome do titular:');
        this.titular.nomeSocial = this.entrada.receberTexto('Novo nome social do titular:');
        this.titular.dataNascimento = this.entrada.receberData('Nova data de nascimento do titular:');

        // Chamar outros processos necessários
        const editarEndereco = new CadastroEnderecoTitular(this.titular);
        editarEndereco.processar();

        const editarTelefones = new CadastroTitularTelefone(this.titular);
        editarTelefones.processar();

        const cadastrarDocumentos = new CadastrarDocumentosCliente(this.titular);
        cadastrarDocumentos.processar();

        // Atualizar o titular no armazém
        const index = Armazem.InstanciaUnica.Clientes.findIndex(c => c.id === this.titular.id);
        if (index !== -1) {
            Armazem.InstanciaUnica.Clientes[index] = this.titular;
            console.log('Edição concluída. Titular atualizado.');
        } else {
            console.log('Erro ao atualizar o titular no armazém.');
        }
    }
}
