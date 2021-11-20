import prompt from "prompt-sync";
import Floyd from "./floyd";
import Pacquiao from "./pacquiao";
import Saul from "./saul";

let teclado = prompt();
let option: number = 0;

while (option != 9) {

    console.log(`+===========================+`);
    console.log(`|Qual lutador você escolhe? |`);
    console.log('|1. Floyd Mayweather        |');
    console.log('|2. Saúl Álvarez            |');
    console.log('|3. Manny Pacquiao          |');
    console.log('|4. Mostrar Atributos       |');
    console.log('|9. Sair                    |');
    console.log('+==========================+|');
    option = +teclado("Escolha um Lutador: ");
    console.log(option)

    switch (option) {
        case 1:
            let floyd: Floyd = new Floyd('Floyd Mayweather', 'Meio-Médio', 50, 50, 50, 50, 38)

            let teclado = prompt();
            let option: number = 0;

            while (option != 9) {

                console.log(`|+=== Floyd Mayweather ===+|`);
                console.log('|1. Treinar Golpes         |');
                console.log('|2. Treinar Defesa         |');
                console.log('|3. Lutar                  |');
                console.log('|4. Descansar              |');
                console.log('|5. Atributos              |');
                console.log('|6. Aposentar              |');
                console.log('|9. Trocar Jogador         |');
                console.log('+=========================+|');
                option = +teclado("Escolha uma ação: ");
                console.log(option)

                switch (option) {
                    case 1:
                        floyd.treinarGolpes();
                        console.log(floyd.atributos());

                        break;
                    case 2:
                        floyd.treinarDefesa();
                        console.log(floyd.atributos());
                        break;
                    case 3:

                        break;
                    case 4:
                        floyd.descansar();
                        console.log(floyd.atributos());
                        break;
                    case 5:
                        console.log(floyd.atributos());
                }
            }

            break;
        case 2:
            let saul: Saul = new Saul('Saúl Álvarez', 'Meio-Médio', 50, 50, 50, 50, 30)


            let teclado1 = prompt();
            let option1: number = 0;

            while (option1 != 9) {

                console.log(`|+===== Saúl Álvarez =====+|`);
                console.log('|1. Treinar Golpes         |');
                console.log('|2. Treinar Defesa         |');
                console.log('|3. Lutar                  |');
                console.log('|4. Descansar              |');
                console.log('|5. Atributos              |');
                console.log('|6. Aposentar              |');
                console.log('|9. Trocar Jogador         |');
                console.log('+=========================+|');
                option = +teclado1("Escolha uma ação: ");
                console.log(option1)

                switch (option1) {
                    case 1:
                        saul.treinarGolpes();
                        console.log(saul.atributos());

                        break;
                    case 2:
                        saul.treinarDefesa();
                        console.log(saul.atributos());
                        break;
                    case 3:
                    
                        break;
                    case 4:
                        saul.descansar();
                        console.log(saul.atributos());
                        break;
                    case 5:
                        console.log(saul.atributos());
                }
            }
            break;
        case 3:
            let pacquiao: Pacquiao = new Pacquiao('Manny Pacquiao', 'Meio-Médio', 50, 50, 50, 50, 36)

            let teclado3 = prompt();
            let option3: number = 0;
            while (option3 != 9) {

                console.log(`|+==== Manny Pacquiao ====+|`);
                console.log('|1. Treinar Golpes         |');
                console.log('|2. Treinar Defesa         |');
                console.log('|3. Lutar                  |');
                console.log('|4. Descansar              |');
                console.log('|5. Atributos              |');
                console.log('|6. Aposentar              |');
                console.log('|9. Trocar Jogador         |');
                console.log('+=========================+|');
                option = +teclado3("Escolha uma ação: ");
                console.log(option3)

                switch (option3) {
                    case 1:
                        pacquiao.treinarGolpes();
                        console.log(pacquiao.atributos());

                        break;
                    case 2:
                        pacquiao.treinarDefesa();
                        console.log(pacquiao.atributos());
                        break;
                    case 3:

                        break;
                    case 4:
                        pacquiao.descansar();
                        console.log(pacquiao.atributos());
                        break;
                    case 5:
                        console.log(pacquiao.atributos());
                }

            }
            break;
        case 4:

    }

}