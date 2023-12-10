// ExcluirDependente.ts

import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExcluirDependente extends Processo {
    static entrada: any;
    processar(): void {
        throw new Error("Method not implemented.");
    }
    public static excluir(): void {
        const idDependente = this.entrada.receberNumero('Informe o ID do dependente a ser excluído:');
        const indexDependente = Armazem.InstanciaUnica.Clientes
            .flatMap(titular => titular.dependentes)
            .findIndex(dependente => dependente.id === idDependente);

        if (indexDependente !== -1) {
            // Remover dependente de seu titular
            const titular = Armazem.InstanciaUnica.Clientes
                .find(titular => titular.dependentes.some(dependente => dependente.id === idDependente));
            
            if (titular) {
                titular.dependentes.splice(indexDependente, 1);
                console.log(`Dependente com ID ${idDependente} excluído com sucesso.`);
            } else {
                console.log('Titular não encontrado para o dependente.');
            }
        } else {
            console.log(`Dependente com ID ${idDependente} não encontrado.`);
        }
    }
}
