import {Move} from "./Move";

export class Pokemon {
    name: string;
    hp: number;
    speed: number;
    moves: Move[];

    constructor(name: string, hp: number, speed: number, moves: Move[]) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.moves = moves;
    }

    static firstAttacker(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        return pokemon1.speed < pokemon2.speed ? pokemon2 : pokemon1;
    }

    attack(opponent: Pokemon, moveId: number, random: number = Math.random()): void {
        if (moveId > this.moves.length) {
            return;
        }
        const multiplier = random > 0.9 ? 2 : 1;
        if(multiplier === 2){
            console.log("Critical hit");
        }
        const move = this.moves[moveId];
        opponent.hp -= move.damage * multiplier;
        if (opponent.hp < 0) {
            opponent.hp = 0;
        }
    }
}