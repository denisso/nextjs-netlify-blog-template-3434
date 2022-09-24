import { createTheme } from "@mui/material/styles";
import { grey, yellow, orange, blue } from "@mui/material/colors";
import { reverseColors } from "./themeUtils";

const breakpoints = {
    values: {
        xs: 0,
        xs1: 300,
        xs2: 400,
        xs3: 500,
        sm: 600,
        sm1: 750,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
};
const style = {
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    },
    breakpoints,
    typography: {
        pxToRem: (size) => `1rem`,
        font1: `'IBM Plex Sans', sans-serif`,
        font2: `'Comfortaa', cursive`,
        fontSourceCode: `'Source Code Pro', monospace`,
        fontFamily: `'Comfortaa', cursive`,
    },
};

const colors = {
    color1: grey,
    color2: yellow,
    color3: orange,
    color4: blue,
};

export const light = createTheme({
    palette: {
        mode: "light",
        rootColor: "white",
        ...colors,
    },
    ...style,
});

export const dark = createTheme({
    palette: {
        mode: "dark",
        rootColor: "gray",
        color1: reverseColors(colors.color1),
        color2: reverseColors(colors.color2),
        color3: reverseColors(colors.color3),
        color4: reverseColors(colors.color4),
    },
    ...style,
});
