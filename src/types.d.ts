export interface Pokemon {
    abilities: Ability[];
    sprites: PokemonSprites;
    stats: PokemonStat[];
}

interface Ability {
    ability: PokemonAbility;
}

export interface PokemonAbility {
    name: string;
    url: string
}

export interface PokemonSprites {
    front_default: string;
}

export interface PokemonStat {
    base_state: number;
    stat: {
        name: string
    }
}
