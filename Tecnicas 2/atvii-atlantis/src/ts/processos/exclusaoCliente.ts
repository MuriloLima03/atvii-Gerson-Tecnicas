// ExcluirTitular.ts

import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExcluirTitular extends Processo {
    static entrada: any;
    processar(): void {
        throw new Error("Method not implemented.");
    }
    public static excluir(): void {
        const idTitular = this.entrada.receberNumero('Informe o ID do titular a ser excluído:');
        const indexTitular = Armazem.InstanciaUnica.Clientes.findIndex(cliente => cliente.id === idTitular);

        if (indexTitular !== -1) {
            Armazem.InstanciaUnica.Clientes.splice(indexTitular, 1);
            console.log(`Titular com ID ${idTitular} excluído com sucesso.`);
        } else {
            console.log(`Titular com ID ${idTitular} não encontrado.`);
        }
    }
}
