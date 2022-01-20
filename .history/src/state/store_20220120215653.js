import { createStore } from "redux";
import reducers from "./reducers/allReducers";

export const store = createStore(
    reducers,
    {}
)