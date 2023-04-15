import { PokemonState } from "./State";

export const LOADING_POKEMON = 'LOADING POKEMON';
export const LOAD_POKEMON = 'LOAD POKEMON';
export const LOAD_POKEMON_SUCCESS = 'LOAD POKEMON SUCCESS';
export const LOAD_POKEMON_FAILURE = 'LOAD POKEMON FAILURE';

export interface LoadPokemonAction {
    readonly type: typeof LOAD_POKEMON;
    readonly pokemonName: string;
}

export interface LoadingPokemonAction {
    readonly type: typeof LOADING_POKEMON;
}

export interface LoadPokemonSuccessAction {
    readonly type: typeof LOAD_POKEMON_SUCCESS;
    readonly pokemon: PokemonState["pokemon"];
}

export interface LoadPokemonFailureAction {
    readonly type: typeof LOAD_POKEMON_FAILURE;
}


export type PokemonAction =
    LoadPokemonAction
    | LoadingPokemonAction
    | LoadPokemonSuccessAction
    | LoadPokemonFailureAction;
