// tipoCadastroCliente.ts

import Processo from "../abstracoes/processo";
import MenuTipoDeCadastroCliente from "../menus/menuTipoDeCadastroCliente";
import CadastroDependente from "./cadastroDependente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import Cliente from "../modelos/cliente";  // Importe a classe Cliente

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super();
        this.menu = new MenuTipoDeCadastroCliente();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular();
                this.processo.processar();
                break;
            case 2:
                // Crie um cliente fictício para passar como argumento
                const clienteFicticio = new Cliente(0, '', '', new Date());
                this.processo = new CadastroDependente(clienteFicticio);
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
