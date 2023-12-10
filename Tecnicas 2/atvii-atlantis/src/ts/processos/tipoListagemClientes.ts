// TipoListagemClientes.ts

import Processo from "../abstracoes/processo";
import ListagemClientes from "./listagemClientes";
import ListagemTitulares from "./listagemTitulares";
import ListagemDependentes from "./listagemDependentesTitular";
import MenuTipoDeListagemClientes from "../menus/menuTipoDeListagemClientes";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super();
        this.menu = new MenuTipoDeListagemClientes();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');

        switch (this.opcao) {
            case 1:
                ListagemClientes.listar();
                break;
            case 2:
                ListagemTitulares.listar();
                break;
            case 3:
                ListagemDependentes.listar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
