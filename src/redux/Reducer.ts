import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon/Reducer";

export const rootReducer = combineReducers({
    pokemon: pokemonReducer
});
