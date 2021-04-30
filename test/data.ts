import {Pokemon} from "../src/Pokemon";
import {Move} from "../src/Move";

const basicAttack = new Move("tackle", 35);

export const pikachu = new Pokemon(
    "pikachu",
    100,
    90,
    [
        basicAttack,
        new Move("thunder", 90)
    ]);
export const ninjask = new Pokemon(
    "ninjask",
    80,
    160,
    [
        basicAttack,
        new Move("x-scisors", 80)
    ]);
export const kicklee = new Pokemon(
    "kicklee",
    130,
    90,
    [
        basicAttack,
        new Move("low kick", 75)
    ]);