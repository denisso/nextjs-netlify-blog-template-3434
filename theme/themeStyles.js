import { createTheme } from "@mui/material/styles";

export const light = createTheme({
    palette: {
        mode: "light",
        background: "white",
    },
});

export const dark = createTheme({
    palette: {
        mode: "dark",
        background: "gray",
    },
});
