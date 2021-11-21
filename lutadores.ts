
import { Rando } from "./randow";
export class LutadorBase {
            protected nome: string;
            protected categoria: string;
            protected defesa: number;
            protected forca: number;
            protected idade: number;
            protected velocidade: number;
            protected resistencia: number;
            protected media: number | undefined;
        
            constructor(nome: string, _categoria: string, _defesa: number, _forca: number, _resistencia: number, _velocidade: number, idade: number, media: number) {
                this.nome = nome;
                this.categoria = 'Meio-Médio';
                this.defesa = _defesa;
                this.forca = _forca;
                this.idade = idade;
                this.resistencia = _resistencia;
                this.velocidade = _velocidade;
                media = media

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
                this.forca += Rando.randomizar(10, 20)
                this.velocidade += Rando.randomizar(10, 20)
            }
            public treinarDefesa(): void {
                this.defesa += Rando.randomizar(10, 20)
                this.resistencia += Rando.randomizar(10, 20)
            }
            
            public descansar(): void {
                this.forca -= Rando.randomizar(5, 10)
                this.velocidade -= Rando.randomizar(5, 10)
                this.defesa -= Rando.randomizar(5, 10)
                this.resistencia -= Rando.randomizar(5, 10)
            }
            
            public historicoLutas(): void {
                // aqui seria o historioco de vitorias e derrotas
            }
            public luta(): void {
                this.media = this.defesa + this.forca + this.resistencia + this.velocidade / 4
            }
            
        }
            
        


    
        
       