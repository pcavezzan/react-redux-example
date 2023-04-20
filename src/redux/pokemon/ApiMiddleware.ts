import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux"
import {
    LOAD_POKEMON,
    LOAD_POKEMON_FAILURE,
    LOAD_POKEMON_SUCCESS,
    LoadPokemonAction,
    LoadPokemonSuccessAction
} from "./Actions";
import { getPokemonByName } from "../../services/pokemon";

export const loadPokemon = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    if (action.type === LOAD_POKEMON) {
        // Make an API call to fetch todos from the server
        const loadPokemonAction = action as LoadPokemonAction;
        getPokemonByName(loadPokemonAction.pokemonName)
            .then((pokemon): LoadPokemonSuccessAction => ({
                    type: LOAD_POKEMON_SUCCESS,
                    pokemon: {
                        abilities: pokemon.abilities.map(a => a.ability),
                        stats: pokemon.stats,
                        sprites: pokemon.sprites
                    }
                })
            ).then((action) => store.dispatch(action))
            .catch(() => store.dispatch({ type: LOAD_POKEMON_FAILURE }));
    }

    return next(action)
}

export const pokemonApiMiddlewares: Middleware[] = [loadPokemon];
