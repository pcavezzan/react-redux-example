import {Pokemon} from "../types";
import {getPokemonByName} from "./pokemon";

describe('services/pokemon', () => {
    let fetchMock: any = undefined;
    const pokemon: Pokemon = {
        abilities: [{ability: {name: 'power', url: 'https://google.com'}}],
        stats: [{stat: {name: 'fire'}, base_state: 1}],
        sprites: {front_default: ''}
    };
    const pokemonFetchMock = () => Promise.resolve({ok: true, status: 200, json: async () => (pokemon)} as Response);

    beforeEach(() => {
        fetchMock = jest.spyOn(global, "fetch").mockImplementation(pokemonFetchMock);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('getPokemonByName should fetch pokemon by getting pokeapi', async () => {
        const pokemonByName = await getPokemonByName('ditto');

        expect(pokemonByName).toEqual(pokemon);
        expect(fetchMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/ditto', {method: "GET"});
    })

});