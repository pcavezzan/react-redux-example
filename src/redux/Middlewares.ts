import { applyMiddleware } from "redux";
import { pokemonApiMiddlewares } from "./pokemon/ApiMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewareEnhancer = applyMiddleware(...pokemonApiMiddlewares)
export const rootStoreEnhancer = composeWithDevTools(middlewareEnhancer);
