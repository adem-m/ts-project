import {kicklee, pikachu} from "./test/data";
import {Battle} from "./src/Battle";

const battle = new Battle(pikachu, kicklee);

battle.run();