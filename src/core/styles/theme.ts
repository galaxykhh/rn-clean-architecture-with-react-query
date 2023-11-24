import { createTheme } from '@shopify/restyle';
import palette from './palette';
import textVariants from './variants/text-variants';

export const theme = createTheme({
    colors: {
        black: palette.black,
        white: palette.white,
    

        background00: palette.background.light.background00,
        background01: palette.background.light.background01,
        background02: palette.background.light.background02,
        background03: palette.background.light.background03,

        textPrimary: palette.text.light.primary,
        textSecondary: palette.text.light.secondary,
        textInvert: palette.text.light.invert,
    },
    spacing: {
        s4: 4,
        s6: 6,
        s8: 8,
        s10: 10,
        s12: 12,
        s14: 14,
        s16: 16,
        s18: 18,
        s20: 20,
        s24: 24,
        s32: 32,
        s40: 40,
        s54: 54,
        s60: 60,
        s72: 72,
        s80: 80,
        s92: 92,
        s100: 100,
        screenHorizontal: 16,
        screenBottom: 24,
    },
    borderRadii: {
        zero: 0,
        s4: 4,
        s6: 6,
        s8: 8,
        s10: 10,
        s12: 12,
        s14: 14,
        s16: 16,
        s18: 18,
        s20: 20,
        s24: 24,
        s32: 32,
        s40: 40,
        s54: 54,
        circle: 999,
    },
    textVariants,
});

export type AppTheme = typeof theme;

export const darkTheme: AppTheme = {
    ...theme,
    colors: {
        ...theme.colors,

        background00: palette.background.dark.background00,
        background01: palette.background.dark.background01,
        background02: palette.background.dark.background02,
        background03: palette.background.dark.background03,

        textPrimary: palette.text.dark.primary,
        textSecondary: palette.text.dark.secondary,
        textInvert: palette.text.dark.invert,
    },
};