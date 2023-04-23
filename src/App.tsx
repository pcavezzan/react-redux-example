import React, { ChangeEvent, useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { LOAD_POKEMON, selectPokemon } from './redux';

function App() {
    const dispatch = useDispatch();
    const pokemonState = useSelector(selectPokemon);
    const [pokemonName, setPokemonName] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value);
    const handleSubmit = () => dispatch({ type: LOAD_POKEMON, pokemonName });

    return (
        <div className="App">
            <input type="text" placeholder="Enter the pokemon name" onChange={handleChange} value={pokemonName}/>
            <button onClick={handleSubmit}>Submit</button>
            {pokemonState.pokemon && (
                <div>
                    <img src={pokemonState.pokemon.sprites.front_default} alt="logo"/>
                    {pokemonState.pokemon.abilities.map(ability =>
                        <p key={ability.name}>{ability.name}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
