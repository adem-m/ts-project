import {Pokemon} from "./Pokemon";
import {sleep} from "./utils";
import {Logger} from "./Logger";

export class Battle {
    pokemon1: Pokemon;
    pokemon2: Pokemon;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = Pokemon.firstAttacker(pokemon1, pokemon2);
        this.pokemon2 = pokemon1 === this.pokemon1 ? pokemon2 : pokemon1;
    }

    async run(random?: number): Promise<Pokemon> {
        const pokemons = [this.pokemon1, this.pokemon2];
        let index = 0;
        Logger.logBegin(this.pokemon1, this.pokemon2);

        while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
            await sleep(500);
            const attacking = pokemons[index];
            const attacked = pokemons[1 - index];
            Logger.logAttack(attacking, attacked);
            attacking.attack(attacked, 1, random);
            Logger.logHP(attacked);
            index = 1 - index;
        }
        await sleep(1000);
        const winner = this.pokemon1.hp === 0 ? this.pokemon2 : this.pokemon1;
        Logger.logWinner(winner);
        return winner;
    }
}