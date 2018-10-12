export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.texto = texto ? texto.charAt(0).toUpperCase() + texto.slice(1) : texto;
        this.completado = false;
        this.id = Math.random();
    }
}