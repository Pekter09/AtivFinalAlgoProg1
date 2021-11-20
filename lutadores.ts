
export class LutadorBase {
            protected nome: string;
            protected categoria: string;
            protected defesa: number;
            protected forca: number;
            protected idade: number;
            protected velocidade: number;
            protected resistencia: number;
        
            constructor(nome: string, _categoria: string, _defesa: number, _forca: number, _resistencia: number, _velocidade: number, idade: number) {
                this.nome = nome;
                this.categoria = 'Meio-Médio';
                this.defesa = 50;
                this.forca = 50;
                this.idade = idade;
                this.resistencia = 50;
                this.velocidade = 50;

            }
        }
        
       