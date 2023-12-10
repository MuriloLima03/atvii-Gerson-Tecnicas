import Telefone from "../modelos/telefone";

export default class ImpressorTelefone {
    private telefone: Telefone;

    constructor(telefone: Telefone) {
        this.telefone = telefone;
    }

    imprimir(): string {
        let impressao = `| Telefone:\n`
            + `| DDD: ${this.telefone.Ddd}\n`
            + `| Número: ${this.telefone.Numero}`
        return impressao 
    }
}
