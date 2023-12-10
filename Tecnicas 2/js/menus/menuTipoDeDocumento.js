"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuTipoDocumento {
    mostrar() {
        console.clear();
        console.log(`****************************`);
        console.log(`| Qual documento você vai cadastrar? `);
        console.log(`----------------------`);
        console.log(`| 1 - Cadastro de Pessoas Física`);
        console.log(`| 2 - Registro Geral`);
        console.log(`| 3 - Passaporte`);
        console.log(`| 0 - Finalizar cadastro de documentos`);
        console.log(`----------------------`);
    }
}
exports.default = MenuTipoDocumento;
