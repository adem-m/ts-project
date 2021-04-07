import {Pokemon} from "../src/Pokemon";
import {pikachu, ninjask, kicklee} from "./data";

test("should be correctly named", () => {
    expect(pikachu.name).toBe("pikachu");
});

test("should get correct attacker", () => {
    expect(Pokemon.firstAttacker(pikachu, ninjask)).toBe(ninjask);
});

test("should get correct attacker when speed is equal", () => {
    expect(Pokemon.firstAttacker(pikachu, kicklee)).toBe(pikachu);
});

test("should lower opponent's hp", () => {
    pikachu.attack(ninjask, 0);
    expect(ninjask.hp).toBe(45);
});

test("should not go negative hp", () => {
    pikachu.attack(ninjask, 1);
    pikachu.attack(ninjask, 1);
    expect(ninjask.hp).toBe(0);
})