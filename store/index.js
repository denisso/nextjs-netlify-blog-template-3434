import { configureStore } from "@reduxjs/toolkit";
import { reducerMode } from "../theme/themeSlice";

export function makeStore() {
    return configureStore({
        reducer: { theme: reducerMode },
    });
}

const store = makeStore();

export default store;