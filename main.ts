import prompt from "prompt-sync";
import Floyd from "./src/lutadores/floyd";
import { LutadorBase } from "./src/lutadorBase/lutadores";
import Pacquiao from "./src/lutadores/pacquiao";
import { Rando } from "./src/randow/randow";
import Saul from "./src/lutadores/saul";
import { menuInicial } from "./src/menus/menus";

let teclado = prompt();
let option: number = 0;

let floyd: LutadorBase = new Floyd(
  "Floyd Mayweather", // nome
  "Meio-Médio", // categoria
  Rando.randomizar(80, 90), // defesa
  Rando.randomizar(80, 90), // força
  Rando.randomizar(80, Rando.randomizar(80, 90)), // resistência
  Rando.randomizar(80, Rando.randomizar(80, 90)), // velocidade
  38, // idade
  0 // media
);
let saul: LutadorBase = new Saul(
  "Saúl Álvarez", // nome
  "Meio-Médio", // categoria
  Rando.randomizar(80, Rando.randomizar(80, 90)), // defesa
  Rando.randomizar(80, Rando.randomizar(80, 90)), // força
  Rando.randomizar(80, 90), // resistência
  Rando.randomizar(80, 90), // velocidade
  30, // idade
  0 // media
);
let pacquiao: LutadorBase = new Pacquiao(
  "Manny Pacquiao", // nome
  "Meio-Médio", // categoria
  Rando.randomizar(80, 90), // defesa
  Rando.randomizar(80, Rando.randomizar(80, 90)), // força
  Rando.randomizar(80, 90), // resistência
  Rando.randomizar(80, Rando.randomizar(80, 90)), // velocidade
  36, // idade
  0 // media
);

const lutadores: LutadorBase[] = [];
lutadores.push(floyd);
lutadores.push(saul);
lutadores.push(pacquiao);

while (option != 9) {
  menuInicial;
  option = +teclado("Escolha um Lutador: ");
  console.log(option);

  switch (option) {
    case 1:
      while (option != 9 && !floyd.aposentar()) {
          console.log(`|+=== Floyd Mayweather ===+|`),
          console.log("|1. Treinar Golpes         |"),
          console.log("|2. Treinar Defesa         |"),
          console.log("|3. Lutar com Pacquiao     |"),
          console.log("|4. Lutar com Saúl         |"),
          console.log("|5. Atributos              |"),
          console.log("|9. Trocar Jogador         |"),
          console.log("+=========================+|");
        option = +teclado("Escolha uma ação: ");
        console.log(option);

        switch (option) {
          case 1:
            lutadores.forEach(
              (l) => l.treinarGolpes(),
              console.log(floyd.atributos())
            );
            break;
          case 2:
            lutadores.forEach(
              (l) => l.treinarDefesa(),
              console.log(floyd.atributos())
            );
            break;
          case 3:
            while (floyd.luta() >= pacquiao.luta()) {}
          case 1:
            console.log("O vencedor foi o Floyd");
            break;
          case 2:
            console.log("O vencedor foi o Pacquiao");
            break;
          case 4:
            while (floyd.luta() >= saul.luta()) {}
          case 1:
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
        console.log(`|+===== Saúl Álvarez =====+|`);
        console.log("|1. Treinar Golpes         |");
        console.log("|2. Treinar Defesa         |");
        console.log("|3. Lutar com Pacquiao     |");
        console.log("|4. Lutar com Floyd        |");
        console.log("|5. Atributos              |");
        console.log("|9. Trocar Jogador         |");
        console.log("+=========================+|");
        option = +teclado("Escolha uma ação: ");
        console.log(option);

        switch (option) {
          case 1:
            lutadores.forEach(
              (l) => l.treinarGolpes(),
              console.log(saul.atributos())
            );
            break;
          case 2:
            lutadores.forEach(
              (l) => l.treinarDefesa(),
              console.log(saul.atributos())
            );
            break;
          case 3:
          case 3:
            while (saul.luta() >= pacquiao.luta()) {}
          case 1:
            console.log("O vencedor foi o Saúl");
            break;
          case 2:
            console.log("O vencedor foi o Pacquiao");
            break;
          case 4:
            while (saul.luta() >= floyd.luta()) {}
          case 1:
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
        console.log(`|+==== Manny Pacquiao ====+|`);
        console.log("|1. Treinar Golpes         |");
        console.log("|2. Treinar Defesa         |");
        console.log("|3. Lutar com Floyd        |");
        console.log("|4. Lutar com Saúl         |");
        console.log("|5. Atributos              |");
        console.log("|9. Trocar Jogador         |");
        console.log("+=========================+|");
        option = +teclado("Escolha uma ação: ");
        console.log(option);

        switch (option) {
          case 1:
            lutadores.forEach(
              (l) => l.treinarGolpes(),
              console.log(pacquiao.atributos())
            );
            break;
          case 2:
            lutadores.forEach(
              (l) => l.treinarDefesa(),
              console.log(pacquiao.atributos())
            );
            break;
          case 3:
            while (pacquiao.luta() >= floyd.luta()) {}
          case 1:
            console.log("O vencedor foi o Pacquiao");
            break;
          case 2:
            console.log("O vencedor foi o Floyd");
            break;
          case 4:
            while (pacquiao.luta() >= saul.luta()) {}
          case 1:
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
