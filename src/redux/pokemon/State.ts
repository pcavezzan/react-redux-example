import { PokemonAbility, PokemonSprites, PokemonStat } from "../../types";

export interface PokemonState {
    loading: boolean;
    pokemon: {
        abilities: PokemonAbility[];
        sprites: PokemonSprites;
        stats: PokemonStat[];
    };
}

export const initialPokemonState: PokemonState = {
    loading: false,
    pokemon: {
        sprites: {
            front_default: ''
        },
        stats: [],
        abilities: []
    }
};
