import { LutadorBase } from "./lutadores";
import { Rando } from "./randow";

export default class Floyd extends LutadorBase {
    static atributos: any;

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
        // aqui seria a luta
        
        
    }
    public descansar(): void {
        this.forca -= Rando.randomizar(1, 5)
        this.velocidade -= Rando.randomizar(1, 5)
        this.defesa -= Rando.randomizar(1, 5)
        this.resistencia -= Rando.randomizar(1, 5)
    }
   
    public historicoLutas(): void {
        // aqui seria o historioco de vitorias e derrotas
    }

}
