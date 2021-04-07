import PokeAPI, {IPokemon} from "pokeapi-typescript";

export class Pokemon {
    data: IPokemon;

    static async createPokemon(name: string): Promise<Pokemon | null> {
        try {
            const data = await PokeAPI.Pokemon.resolve(name);
            return new Pokemon(data);
        } catch {
            console.log(`Pokemon ${name} introuvable`);
            return null;
        }
    }

    constructor(data: IPokemon) {
        this.data = data;
    }

    getStat(name: string): number {
        const stat = this.data.stats.filter(value => value.stat.name === name);
        if (stat.length === 1) {
            return stat[0].base_stat;
        }
        return 0;
    }

    static firstAttacker(pokemon1: Pokemon, pokemon2: Pokemon) {
        return pokemon1.getStat('speed') < pokemon2.getStat('speed') ? pokemon2 : pokemon1;
    }
}