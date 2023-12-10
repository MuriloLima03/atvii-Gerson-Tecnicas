import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTitularTelefone from "./cadastroTitularTelefone";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')

        let armazem = Armazem.InstanciaUnica;

        // Certifique-se de que a propriedade id em Armazem está inicializada
        if (!Armazem.id) {
            Armazem.id = 0;
        }

        let idCliente = Armazem.id + 1;
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(idCliente, nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()
        this.processo = new CadastroTitularTelefone(cliente)
        this.processo.processar()
        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        armazem.Clientes.push(cliente);
        Armazem.id++; // Incrementa o id para o próximo cliente

        console.log('Finalizando o cadastro do cliente...')
    }
}
