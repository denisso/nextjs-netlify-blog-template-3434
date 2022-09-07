import { createTheme } from "@mui/material/styles";

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
        font2: `'Comfortaa', cursive`
    }
};
export const light = createTheme({
    palette: {
        mode: "light",
        background: "white",
        background2: "#DDDDDD" 
    },
    ...style,
});

export const dark = createTheme({
    palette: {
        mode: "dark",
        background: "gray",
        background2: "#DDDDDD"
    },
    ...style,
});
