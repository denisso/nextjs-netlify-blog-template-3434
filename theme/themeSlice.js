import { createSlice } from "@reduxjs/toolkit";
import { light, dark } from "./themeStyles";

const slice = createSlice({
    name: "theme",
    initialState: { current: "light" },
    reducers: {
        switchMode: (state) => {
            return { current: state.current === "light" ? "dark" : "light" };
        },
    },
});

export const reducerMode = slice.reducer;

export const selectMode = ({ theme }) => {
    return theme.current;
};

export const selectTheme = ({ theme }) => {
    return theme.current === "light" ? light : dark;
};

export const { switchMode } = slice.actions;
