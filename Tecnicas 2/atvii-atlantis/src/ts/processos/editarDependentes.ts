// EditarDependente.ts

import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class EditarDependente extends Processo {
    private dependente: Cliente;

    constructor(dependente: Cliente) {
        super();
        this.dependente = dependente;
    }

    processar(): void {
        console.log(`Editando informações do dependente ${this.dependente.id} - ${this.dependente.nome}...`);

        // Permitindo a edição do nome e nome social
        this.dependente.nome = this.entrada.receberTexto('Novo nome do dependente:');
        this.dependente.nomeSocial = this.entrada.receberTexto('Novo nome social do dependente:');

        // Chamando o processo para cadastrar/editar documentos
        const cadastrarDocumentos = new CadastrarDocumentosCliente(this.dependente);
        cadastrarDocumentos.processar();

        console.log('Edição concluída. Dependente atualizado.');
    }
}
