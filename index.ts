import {Pokemon} from "./src/Pokemon";

const main = async () => {
    const pikachu = await Pokemon.createPokemon('pikachu');
    if (pikachu !== null) {
        const speed = pikachu.getStat("speed");
        console.log(speed);
    }
}

main();