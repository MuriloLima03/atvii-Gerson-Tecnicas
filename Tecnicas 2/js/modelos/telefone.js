"use strict";
// telefone.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get Ddd() { return this.ddd; }
    get Numero() { return this.numero; }
    // Implementação da interface Prototipo para clonagem
    clonar() {
        const clone = new Telefone(this.ddd, this.numero);
        return clone;
    }
}
exports.default = Telefone;
