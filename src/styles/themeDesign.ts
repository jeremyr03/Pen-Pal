// Set themes
import {PaletteColorOptions, PaletteMode} from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                        main: '#0b4f40'
                    },
                    secondary: {
                        main: '#e3b23c'
                    },
                    background: {
                        default: '#fafafa',
                        paper: '#f4f1de',
                    },
                } as PaletteColorOptions
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#81b29a'
                    },
                    secondary: {
                        main: '#F03A47'
                    },
                    // background:{
                    // default:'#1c1c1c',
                    // paper:'#424242',
                    // },
                } as PaletteColorOptions
        ),
    },
});