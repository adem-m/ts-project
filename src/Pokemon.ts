import {Move} from "./move";

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

    attack(opponent: Pokemon, moveId: number): void {
        if (moveId > this.moves.length) {
            return;
        }
        const move = this.moves[moveId];
        opponent.hp -= move.damage;
        if (opponent.hp < 0) {
            opponent.hp = 0;
        }
    }
}