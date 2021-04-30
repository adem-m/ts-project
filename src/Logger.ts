import {Pokemon} from "./Pokemon";

export class Logger {
    static logBegin(pokemon1: Pokemon, pokemon2: Pokemon) {
        console.log(`Battle between ${pokemon1.name} and ${pokemon2.name}\n`)
    }

    static logAttack(attacking: Pokemon, attacked: Pokemon) {
        console.log(`${attacking.name} attacks ${attacked.name}`);
    }

    static logHP(pokemon: Pokemon) {
        console.log(`${pokemon.name} has ${pokemon.hp} HP`);
    }

    static logWinner(pokemon: Pokemon) {
        console.log(`\n${pokemon.name} won the battle !`)
    }
}