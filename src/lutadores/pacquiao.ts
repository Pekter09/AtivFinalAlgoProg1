import { LutadorBase } from "../lutadorBase/lutadores";
export default class Pacquiao extends LutadorBase {
    protected media: number;

    constructor(nome: string, categoria: string, defesa: number, forca: number, resistencia: number, velocidade: number, idade: number, media: number) {
        super(nome, categoria, defesa, forca, resistencia, velocidade, idade, media);
        this.media= media;
    }
    pacquiao = this.media
}

