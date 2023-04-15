import { PokemonAction } from "./Actions";
import { initialPokemonState, PokemonState } from "./State";

export const pokemonReducer = (state: PokemonState = initialPokemonState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case "LOADING POKEMON":
            return {
                ...state,
                loading: true
            };
        case "LOAD POKEMON FAILURE":
            return {
                ...state,
                loading: false
            };
        case "LOAD POKEMON SUCCESS":
            return {
                ...state,
                pokemon: action.pokemon,
                loading: false
            };
        default:
            return state;
    }
};
