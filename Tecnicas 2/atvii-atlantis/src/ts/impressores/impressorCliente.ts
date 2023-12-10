// impressores/impressorCliente.ts

import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorListaTelefones";

export default class ImpressorCliente implements Impressor {
    private cliente: Cliente;
    private impressor!: Impressor;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    imprimir(): string {
        let impressao = `****************************\n`
            + `| Id: ${this.cliente.id}\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`;

        this.impressor = new ImpressorEndereco(this.cliente.Endereco);
        impressao += `\n${this.impressor.imprimir()}`;

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos);
        impressao += `\n${this.impressor.imprimir()}`;

        this.impressor = new ImpressorTelefones(this.cliente.Telefones);
        impressao += `\n${this.impressor.imprimir()}`;

        impressao += `\n****************************`;
        return impressao;
    }
}
