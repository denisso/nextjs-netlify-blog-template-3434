import { createTheme } from "@mui/material/styles";
import { grey, red, orange, blue } from '@mui/material/colors';
import {reverseColors} from "./themeUtils"
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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        font1: `'IBM Plex Sans', sans-serif`,
        font2: `'Comfortaa', cursive`,
        fontFamily: `'Comfortaa', cursive`,
        fontSize: "20",
    }
};

const colors = {
    color1: grey,
    color2: red,
    color3: orange,
    color4: blue
}

export const light = createTheme({
    palette: {
        mode: "light",
        rootColor: "white",
        ...colors
    },
    ...style,
});

export const dark = createTheme({
    palette: {
        mode: "dark",
        rootColor: "gray",
        color1: reverseColors(colors.color1),
        color2: reverseColors(colors.color2),
        color2: reverseColors(colors.color3),
        color3: reverseColors(colors.color4),
    },
    ...style,
});
