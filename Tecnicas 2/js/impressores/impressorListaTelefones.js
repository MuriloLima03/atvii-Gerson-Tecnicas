"use strict";
// impressores/impressorListaTelefones.ts
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorTelefones {
    constructor(telefones) {
        this.telefones = telefones;
    }
    imprimir() {
        let impressao = "| Telefones:\n";
        this.telefones.forEach((telefone, index) => {
            impressao += `| ${index + 1}. ${telefone.Numero}\n`;
        });
        return impressao;
    }
}
exports.default = ImpressorTelefones;
