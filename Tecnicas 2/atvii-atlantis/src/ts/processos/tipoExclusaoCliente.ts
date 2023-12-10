// SelecionarTipoExclusao.ts

import Processo from "../abstracoes/processo";
import ExcluirDependente from "./exclusaoDependente";
import MenuTipoExclusao from "../menus/menuTipoExclusão";
import ExcluirTitular from "./exclusaoCliente"; // Corrigir o nome da classe

export default class SelecionarTipoExclusao extends Processo {
    processar(): void {
    }
    static entrada: any;
    public static selecionarTipo(): void {
        console.log('Escolha o tipo de exclusão:');
        console.log('1. Excluir Titular');
        console.log('2. Excluir Dependente');

        const opcao = this.entrada.receberNumero('Qual opção deseja?');

        switch (opcao) {
            case 1:
                ExcluirTitular.excluir();  // Corrigir a chamada do método
                break;
            case 2:
                ExcluirDependente.excluir();
                break;
            default:
                console.log('Opção não válida.');
        }
    }
}
