"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Armazem {
    constructor() {
        this.id = 0;
        this.clientes = [];
    }
    static get InstanciaUnica() {
        return this.instanciaUnica;
    }
    get Clientes() {
        return this.clientes;
    }
    get Id() {
        return this.id;
    }
    setId(id) { this.id = id; }
}
Armazem.instanciaUnica = new Armazem();
exports.default = Armazem;
