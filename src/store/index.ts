
import { createStore } from "easy-peasy";
import { injections } from "./injections";
import model from "./model";



const store = createStore(model, {injections});

export default store;