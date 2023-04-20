import { pokemonReducer } from "./Reducer";
import { initialPokemonState, PokemonState } from "./State";
import {
    LOAD_POKEMON_FAILURE,
    LOAD_POKEMON_SUCCESS,
    LOADING_POKEMON,
    LoadingPokemonAction,
    LoadPokemonFailureAction,
    LoadPokemonSuccessAction
} from "./Actions";

const aPokemon = () => ({ abilities: [], sprites: { front_default: '' }, stats: [] });

describe('Pokemon/Reducer', () => {
    test('should set loading on loading pokemon', () => {
        const pokemonState: PokemonState = { ...initialPokemonState, loading: false };
        const action: LoadingPokemonAction = { type: LOADING_POKEMON };

        const newState = pokemonReducer(pokemonState, action);

        expect(newState).toEqual({
            ...initialPokemonState,
            loading: true
        })
    });

    test('should unset loading on load pokemon failure', () => {
        const pokemonState: PokemonState = { ...initialPokemonState, loading: true };
        const action: LoadPokemonFailureAction = { type: LOAD_POKEMON_FAILURE };

        const newState = pokemonReducer(pokemonState, action);

        expect(newState).toEqual({
            ...initialPokemonState,
            loading: false
        })
    });

    test('should unset loading on load pokemon success', () => {
        const pokemonState: PokemonState = { ...initialPokemonState, loading: true };
        const action: LoadPokemonSuccessAction = { type: LOAD_POKEMON_SUCCESS, pokemon: aPokemon() };

        const newState = pokemonReducer(pokemonState, action);

        expect(newState).toEqual({
            ...initialPokemonState,
            loading: false
        })
    });
});
