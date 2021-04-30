import {Battle} from "../src/Battle";
import {kicklee, pikachu} from "./data";

describe("battle", () => {
    const random = 0;
    const battle = new Battle(pikachu, kicklee);

    it("should return winner", async () => {
        const winner = await battle.run(random);
        expect(winner).toBe(pikachu);
    });
});