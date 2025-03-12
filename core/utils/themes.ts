import type { ThemeDefinition } from "vuetify";

export const LIGHT_THEME = "light";

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#F4F4F5",
    danger: '#EF4444',
    'neutrals-1': '#18181B',
    'neutrals-2': '#3F3F46',
    'neutrals-3': '#71717A',
    'neutrals-4': '#FAFAFA',
    'neutrals-5': '#E4E4E7',
    'neutrals-6': '#A1A1AA',
    'neutrals-7': '#D4D4D8',
    'brand-1': '#00DC82',
    'brand-2': '#00BD70',
  },
};

export const DARK_THEME = "dark";

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#020420",
    surface: "#27272A",
    danger: '#EF4444',
    'neutrals-1': '#FAFAFA',
    'neutrals-2': '#E4E4E7',
    'neutrals-3': '#A1A1AA',
    'neutrals-4': '#27272A',
    'neutrals-5': '#3F3F46',
    'neutrals-6': '#52525B',
    'neutrals-7': '#3F3F46',
    'brand-1': '#00DC82',
    'brand-2': '#00BD70',
  },
};
