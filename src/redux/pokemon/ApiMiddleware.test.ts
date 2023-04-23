import {loadPokemon} from "./ApiMiddleware";
import {
    LOAD_POKEMON, LOAD_POKEMON_FAILURE,
    LOAD_POKEMON_SUCCESS,
    LoadPokemonAction, LoadPokemonFailureAction,
    LoadPokemonSuccessAction
} from "./Actions";
import * as PokemonApi from '../../services/pokemon';
import {Pokemon} from "../../types";
import {MiddlewareAPI} from "redux";

describe('pokemon/ApiMiddleware', () => {
    test('should dispatch load pokemon success action on load pokemon action when api return pokemon successfully', async () => {
        const pokemon: Pokemon = {
            abilities: [{ability: {name: 'power', url: 'https://google.com'}}],
            stats: [{stat: {name: 'fire'}, base_state: 1}],
            sprites: {front_default: ''}
        };
        jest.spyOn(PokemonApi, 'getPokemonByName').mockResolvedValue(pokemon);
        const { store, loadPokemon } = aLoadPokemonMiddleWare();
        const action: LoadPokemonAction = {type: LOAD_POKEMON, pokemonName: 'pokemon'};

        await loadPokemon(action);

        expect(store.dispatch).toHaveBeenCalledWith({
            type: LOAD_POKEMON_SUCCESS,
            pokemon: {
                sprites: { front_default: '' },
                stats: [{ stat: { name: 'fire' } , base_state: 1}],
                abilities: [{ name: 'power', url: 'https://google.com' }]
            }
        } as LoadPokemonSuccessAction);
    });

    test('should dispatch load pokemon failure action on load pokemon action when api call fails', async () => {
        jest.spyOn(PokemonApi, 'getPokemonByName').mockRejectedValue('error');
        const { store, loadPokemon } = aLoadPokemonMiddleWare();
        const action: LoadPokemonAction = {type: LOAD_POKEMON, pokemonName: 'pokemon'};

        await loadPokemon(action);

        expect(store.dispatch).toHaveBeenCalledWith({type: LOAD_POKEMON_FAILURE} as LoadPokemonFailureAction);
    });

    const aLoadPokemonMiddleWare = () => {
        const store: MiddlewareAPI = {
            getState: jest.fn(),
            dispatch: jest.fn()
        }
        const next = jest.fn()

        const invoke = (action: any) => loadPokemon(store)(next)(action)

        return { store, next, loadPokemon: invoke }
    }

});