// telefone.ts

import Prototipo from "../interfaces/prototipo";

export default class Telefone implements Prototipo {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    // Implementação da interface Prototipo para clonagem
    clonar(): Prototipo {
        const clone = new Telefone(this.ddd, this.numero);
        return clone;
    }
}
