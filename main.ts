import prompt from "prompt-sync";
import Floyd from "./floyd";
import { LutadorBase } from "./lutadores";
import Pacquiao from "./pacquiao";
import { Rando } from "./randow";
import Saul from "./saul";
import { menuFloyd, menuInicial, menuPac, menuSaul } from "./menus"


let teclado = prompt();
let option: number = 0;

let floyd: LutadorBase = new Floyd("Floyd Mayweather", 'Meio-Médio', Rando.randomizar(80, 90), Rando.randomizar(80, 90), Rando.randomizar(80, Rando.randomizar(80, 90)), Rando.randomizar(80, Rando.randomizar(80, 90)), 38, 0)
let saul: LutadorBase = new Saul("Saúl Álvarez", 'Meio-Médio', Rando.randomizar(80, Rando.randomizar(80, 90)), Rando.randomizar(80, Rando.randomizar(80, 90)), Rando.randomizar(80, 90), Rando.randomizar(80, 90), 30, 0)
let pacquiao: LutadorBase = new Pacquiao("Manny Pacquiao", 'Meio-Médio', Rando.randomizar(80, 90), Rando.randomizar(80, Rando.randomizar(80, 90)), Rando.randomizar(80, 90), Rando.randomizar(80, Rando.randomizar(80, 90)), 36, 0)

const lutadores: LutadorBase[] = [];
lutadores.push(floyd)
lutadores.push(saul)
lutadores.push(pacquiao)

while (option != 9) {

    menuInicial
    option = +teclado("Escolha um Lutador: ");
    console.log(option)

    switch (option) {
        case 1:

            while (option != 9 && !floyd.aposentar()) {

                menuFloyd
                option = +teclado("Escolha uma ação: ");
                console.log(option)

                switch (option) {
                    case 1:
                        lutadores.forEach((l) => l.treinarGolpes(), console.log(floyd.atributos()));
                        break;
                    case 2:
                        lutadores.forEach((l) => l.treinarDefesa(), console.log(floyd.atributos()));
                        break;
                    case 3:
                        while (floyd.luta() >= pacquiao.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Floyd");
                        break;
                    case 2:
                        console.log("O vencedor foi o Pacquiao");
                        break;
                    case 4:
                        while (floyd.luta() >= saul.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Floyd");
                        break;
                    case 2:
                        console.log("O vencedor foi o Saúl");
                        break;
                    case 5:
                        console.log(floyd.atributos());
                }
                console.log(floyd.atributos());

            }

            break;
        case 2:

            while (option != 9 && !saul.aposentar()) {

                menuSaul
                option = +teclado("Escolha uma ação: ");
                console.log(option)

                switch (option) {
                    case 1:
                        lutadores.forEach((l) => l.treinarGolpes(), console.log(saul.atributos()));
                        break;
                    case 2:
                        lutadores.forEach((l) => l.treinarDefesa(), console.log(saul.atributos()));
                        break;
                    case 3:
                    case 3:
                        while (saul.luta() >= pacquiao.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Saúl");
                        break;
                    case 2:
                        console.log("O vencedor foi o Pacquiao");
                        break;
                    case 4:
                        while (saul.luta() >= floyd.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Saúl");
                        break;
                    case 2:
                        console.log("O vencedor foi o Floyd");
                        break;
                    case 5:
                        console.log(saul.atributos());
                }
                console.log(saul.atributos());

            }
            break;
        case 3:
            while (option != 9 && !pacquiao.aposentar()) {

                menuPac
                option = +teclado("Escolha uma ação: ");
                console.log(option)

                switch (option) {
                    case 1:
                        lutadores.forEach((l) => l.treinarGolpes(), console.log(pacquiao.atributos()));
                        break;
                    case 2:
                        lutadores.forEach((l) => l.treinarDefesa(), console.log(pacquiao.atributos()));
                        break;
                    case 3:
                        while (pacquiao.luta() >= floyd.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Pacquiao");
                        break;
                          case 2:
                        console.log("O vencedor foi o Floyd");
                        break;
                    case 4:
                        while (pacquiao.luta() >= saul.luta()) {
                        } case 1:
                        console.log("O vencedor foi o Pacquiao");
                        break;
                        case 2:
                        console.log("O vencedor foi o Saúl");
                        break;
                    case 5:
                        console.log(pacquiao.atributos());
                }
                console.log(pacquiao.atributos());

            }
            break;
        case 4:
            lutadores.forEach((l) => console.log(l.atributos()));
    }
}