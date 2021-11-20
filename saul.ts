import { LutadorBase } from "./lutadores";
import { Rando } from "./randow";

export default class Saul extends LutadorBase {
    static atributos(): any {
        throw new Error("Method not implemented.");
    }
    
    constructor(nome: string, categoria: string, defesa: number, forca: number, resistencia: number, velocidade: number, idade: number) {
        super(nome, categoria, defesa, forca, resistencia, velocidade, idade);
    }
        

    public atributos(): string {
        return (
            ("\nNome: " + this.nome) +
            ("\nCategoria: " + this.categoria) +
            ("\nForça: " + this.forca.toFixed(0)) +
            ("\nVelocidade: " + this.velocidade.toFixed(0)) +
            ("\nDefesa: " + this.defesa.toFixed(0)) +
            ("\nResistência: " + this.resistencia.toFixed(0)) 
        );
    }

    public treinarGolpes(): void {
        this.forca += Rando.randomizar(3, 10)
        this.velocidade += Rando.randomizar(3, 10)
    }
    public treinarDefesa(): void {
        this.defesa += Rando.randomizar(3, 10)
        this.resistencia += Rando.randomizar(3, 10)
    }
    public lutar(): void {
        this.atributos
    }
    public descansar(): void {
        this.forca -= Rando.randomizar(1, 4)
        this.velocidade -= Rando.randomizar(1, 4)
        this.defesa -= Rando.randomizar(1, 4)
        this.resistencia -= Rando.randomizar(1, 4)
    }
   
    public historicoLutas(): void {

    }
}

