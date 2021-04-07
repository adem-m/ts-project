import {Pokemon} from "../src/Pokemon";
import {pikachu, ninjask, kicklee} from "./data";

describe("pokemon", () => {
    let random = () => 0.2;

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
        pikachu.attack(ninjask, 0, random());
        expect(ninjask.hp).toBe(45);
    });

    test("should not go negative hp", () => {
        pikachu.attack(ninjask, 1, random());
        pikachu.attack(ninjask, 1, random());
        expect(ninjask.hp).toBe(0);
    });

    describe("when i'm lucky", () => {
        beforeEach(() => {
            random = () => 0.99;
        })
        test("should lower opponent's hp", () => {
            kicklee.attack(pikachu, 0, random());
            expect(pikachu.hp).toBe(30);
        });
    });
});
