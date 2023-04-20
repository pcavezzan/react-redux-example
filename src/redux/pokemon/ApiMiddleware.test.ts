import { loadPokemon } from "./ApiMiddleware";
import { MiddlewareAPI } from "redux";
import { LOAD_POKEMON, LOAD_POKEMON_SUCCESS, LoadPokemonAction, LoadPokemonSuccessAction } from "./Actions";

describe('pokemon/ApiMiddleware', () => {
    test('should dispatch load pokemon success action on load pokemon action when api return pokemon successfully', () => {
        const dispatchMock = jest.fn().mockReturnThis();
        const middlewareApi: MiddlewareAPI = { dispatch: dispatchMock, getState: () => ({}) };
        const loadPokemonMiddleWare = loadPokemon(middlewareApi);
        const action: LoadPokemonAction = { type: LOAD_POKEMON, pokemonName: 'pokemon' };

        const nextAction = loadPokemonMiddleWare(dispatchMock)(action);

        expect(nextAction).toEqual({ type: LOAD_POKEMON_SUCCESS, pokemon: {} } as LoadPokemonSuccessAction)
    });
})
