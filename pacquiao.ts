import { LutadorBase } from "./lutadores";
import { Rando } from "./randow";

export default class Pacquiao extends LutadorBase {
    
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
        this.forca += Rando.randomizar(1, 7)
        this.velocidade += Rando.randomizar(1, 7)
    }
    public treinarDefesa(): void {
        this.defesa += Rando.randomizar(1, 7)
        this.resistencia += Rando.randomizar(1, 7)
    }
    public lutar(): void {
        this.atributos
    }
    public descansar(): void {
        this.forca -= Rando.randomizar(1, 8)
        this.velocidade -= Rando.randomizar(1, 8)
        this.defesa -= Rando.randomizar(1, 8)
        this.resistencia -= Rando.randomizar(1, 8)
    }
   
    public historicoLutas(): void {

    }

}

