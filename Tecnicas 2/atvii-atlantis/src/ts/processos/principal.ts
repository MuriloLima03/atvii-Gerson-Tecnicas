// principal.ts

import Processo from "../abstracoes/processo";
import MenuPrincipal from "../menus/menuPricipal";
import TipoCadastroCliente from "./tipoCadastroCliente";
import TipoListagemClientes from "./tipoListagemClientes";
import TipoEdicaoCliente from "./tipoEdicaoCliente";
import TipoExclusaoCliente from "./tipoExclusaoCliente";

export default class Principal extends Processo {
    constructor() {
        super();
        this.execucao = true;
        this.menu = new MenuPrincipal();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente();
                this.processo.processar()
                break;
            case 2:
                this.processo = new TipoEdicaoCliente();
                break;
            case 3:
                this.processo = new TipoListagemClientes();
                break;
            case 4:
                this.processo = new TipoExclusaoCliente();
                break;
            case 0:
                this.execucao = false;
                console.log('Até logo!');
                console.clear();
                break;
            default:
                console.log('Opção não entendida :(');
        }

        if (this.processo) {
            this.processo.processar();
        }
    }
}
