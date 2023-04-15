import { Pokemon } from "../types";

const mapResponseToPokemon = async (response: Response): Promise<Pokemon> => {
    return await response.json() as Pokemon
};

export const getPokemonByName = async (pokemon: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { method: "GET" });
    return await mapResponseToPokemon(response);
};
