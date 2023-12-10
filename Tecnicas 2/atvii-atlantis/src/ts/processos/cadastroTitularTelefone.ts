import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTitularTelefone extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.execucao = true;
    }

    processar(): void {
        console.clear();
        console.log('Vamos cadastrar telefones:');
        console.log('****************************');
        while (this.execucao) {
            console.log('----------------------');
            console.log('| 1 - Cadastrar');
            console.log('| 0 - Finalizar');
            console.log('----------------------');
            this.opcao = this.entrada.receberNumero('| Escolha a opção desejada?');

            switch (this.opcao) {
                case 1:
                    console.log('Coletando os dados de telefone...');
                    let ddd = this.entrada.receberTexto('Qual o DDD?');
                    let numero = this.entrada.receberTexto('Qual o número?');
                    let novoTelefone = new Telefone(ddd, numero)
                    this.cliente.Telefones.push(novoTelefone)
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
