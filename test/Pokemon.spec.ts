import {Pokemon} from "../src/Pokemon";
import {pikachu, ninjask, giratina} from "./data";

test("should be correctly named", () => {
    expect(pikachu.data.name).toBe("pikachu");
});

test("should get correct attacker", () => {
    expect(Pokemon.firstAttacker(pikachu, ninjask)).toBe(ninjask);
});

test("should get correct attacker when speed is equal", async () => {
    expect(Pokemon.firstAttacker(pikachu, giratina)).toBe(pikachu);
});

