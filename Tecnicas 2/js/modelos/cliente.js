"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(id, nome, nomeSocial, dataNascimento) {
        this.telefones = [];
        this.documentos = [];
        this.dependentes = [];
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }
    editarCliente(nome, nomeSocial, dataNascimento) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
    }
    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
        dependente.titular = this; // Associar o titular ao dependente
    }
    get Nome() { return this.nome; }
    get NomeSocial() { return this.nomeSocial; }
    get DataNascimento() { return this.dataNascimento; }
    get DataCadastro() { return this.dataCadastro; }
    get Telefones() { return this.telefones; }
    get Endereco() { return this.endereco; }
    get Documentos() { return this.documentos; }
    get Dependentes() { return this.dependentes; }
    get Titular() { return this.titular; }
    set Endereco(endereco) { this.endereco = endereco; }
}
exports.default = Cliente;
