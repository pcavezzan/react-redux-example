import { createStore } from "redux";
import { rootReducer } from "./Reducer";
import { rootStoreEnhancer } from "./Middlewares";

export const store = createStore(rootReducer, rootStoreEnhancer);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const selectPokemon = (state: RootState) => state.pokemon;
