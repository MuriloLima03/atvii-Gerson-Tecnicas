import Cliente from "../modelos/cliente";

export default class Armazem {
    private id: number=0
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    static id: number;
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Id(){
        return this.id}
    public setId(id:number){ this.id = id }
    }
