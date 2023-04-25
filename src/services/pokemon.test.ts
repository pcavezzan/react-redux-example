import {Pokemon} from "../types";
import {getPokemonByName} from "./pokemon";
import ky, {ResponsePromise} from "ky";
import {when} from "jest-when";
import SpyInstance = jest.SpyInstance;

describe('services/pokemon', () => {
    let mockKy: SpyInstance<ResponsePromise>;
    const pokemon: Pokemon = {
        abilities: [{ability: {name: 'power', url: 'https://google.com'}}],
        stats: [{stat: {name: 'fire'}, base_state: 1}],
        sprites: {front_default: ''}
    };

    beforeEach(() => {
        mockKy = jest.spyOn(ky, 'get');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('getPokemonByName should fetch pokemon by getting pokeapi.co', async () => {
        when(mockKy).calledWith('https://pokeapi.co/api/v2/pokemon/ditto')
            .mockResolvedValue({json: async () => pokemon} as ResponsePromise);

        const pokemonByName = await getPokemonByName('ditto');

        expect(pokemonByName).toEqual(pokemon);
    })
});