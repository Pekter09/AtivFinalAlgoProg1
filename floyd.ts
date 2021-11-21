import { LutadorBase } from "./lutadores";
export default class Floyd extends LutadorBase {
    protected media: number;


    constructor(nome: string, categoria: string, defesa: number, forca: number, resistencia: number, velocidade: number, idade: number, media: number) {
        super(nome, categoria, defesa, forca, resistencia, velocidade, idade, media); 
        this.media= media;

    }
     floyd = this.media

}
