import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        colors: {
            'primary': {
                'light': '#ffd9e2',
                'default': '#ffb1c8',
                'dark': '#5e1133',
                'opaque': '#7b2949',
            },
            'secondary': {
                'light': '#97f0ff',
                'default': '#4fd8eb',
                'dark': '#00363d',
                'opaque': '#004f58',
            },
            'tertiary': {
                'light': '#ffd9e0',
                'default': '#8f0041',
                'dark': '#66002c',
                'opaque': '#ffb1c2',
            },
            'bkg': {
                'light': '#a6eeff',
                'default': '#001f25',
                'opaque': '#a6eeff',
            },
            'white': {
                light: '#F7F7F7',
                DEFAULT: '#ffffff',
                dark: '#dedede',
            },
            'black': {
                light: '#2c2c2c',
                DEFAULT: '#000000',
                dark: '#181818',
            },
            'gray': {
                light: '#808080',
                DEFAULT: '#545454',
                dark: '#2b2b2b',
            },
            'orange': {
                light: '#ffb346',
                DEFAULT: '#fe8206',
                dark: '#c45300',
            },
            'red': {
                light: '#ff6b70',
                DEFAULT: '#dc3545',
                dark: '#a3001e',
            },
            'blue': {
                light: '#EBF0FF',
                DEFAULT: '#355CC0',
                dark: '#253F82',
            },
            'yellow': {
                light: '#ffee4d',
                DEFAULT: 'rgb(255,224,0)',
                dark: '#c18c00',
            },
            'green': {
                light: '#F3FBFA',
                DEFAULT: '#1ED561',
                dark: '#00a233',
                100: '#F2FDFC',
            },
            'greenwater': {
                light: '#F3FBFA',
                DEFAULT: '#32BCAD',
                dark: '#195e56',
                100: '#F2FDFC',
            },
            'magenta': {
                light: '#EB627E',
                DEFAULT: '#BE3455',
                dark: '#600F20',
            },
            'nakedpurple': {
                light: '#F0EBFF',
                DEFAULT: '#4835C0',
                dark: '#00a233',
                100: '#F2FDFC',
            },
            'purple': {
                light: '#d75cff',
                DEFAULT: '#a020f0',
                dark: '#6900bc',
                100: '#F2FDFC',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
                serif: ['"Fira Code"', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
}

