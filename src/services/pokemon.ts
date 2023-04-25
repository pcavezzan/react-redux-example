import {Pokemon} from "../types";
import ky from "ky";

export const getPokemonByName = async (pokemon: string): Promise<Pokemon> => {
    const responsePromise = await ky.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return await responsePromise.json() as Pokemon;
};
