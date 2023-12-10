import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";
import Prototipo from "../interfaces/prototipo";

export default class Cliente {
    public id: number;
    public nome: string;
    public nomeSocial: string;
    public dataNascimento: Date;
    private dataCadastro: Date;
    public telefones: Telefone[] = [];
    public endereco!: Endereco;
    public documentos: Documento[] = [];
    public dependentes: Cliente[] = [];
    public titular!: Cliente;

    constructor(id: number, nome: string, nomeSocial: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }

    public editarCliente(nome: string, nomeSocial: string, dataNascimento: Date): void {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
    }

    public adicionarDependente(dependente: Cliente): void {
        this.dependentes.push(dependente);
        dependente.titular = this; // Associar o titular ao dependente
    } 
    

    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    // Implementação da interface Prototipo para clonagem
}
